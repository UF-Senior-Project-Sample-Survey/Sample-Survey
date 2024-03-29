
import React, { Component } from 'react';
import './EditQuestion.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: '',
            category: '',
            answers: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

        axios.get('/api/question/find/' + this.props.match.params.id)
            .then(res => {
                this.setState(res.data);
            })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeAnswerText = (e) => {
        var tempAnswers = this.state.answers;
        tempAnswers[e.target.name].text = e.target.value;
        this.setState({
            answers: tempAnswers
        })
    }
    onChangeAnswerWeight = (e) => {
        var tempAnswers = this.state.answers;
        tempAnswers[e.target.name].weight = e.target.value;
        this.setState({
            answers: tempAnswers
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const updatedQuestion = {
            _id: this.state._id,
            prompt: this.state.prompt,
            category: this.state.category,
            answers: this.state.answers
        }

        axios.post('/api/question/update/' + this.state._id, updatedQuestion)
            .then(res => {
                this.props.history.push("/controlPanel");
            })
            .catch(err => {
                if (err.response.data.code === 11000) {
                    var errParse = err.response.data.errmsg.split('index: ')[1].split('_')[0];
                    this.setState({
                        regError: 'Error: ' + errParse + ' is already in use'
                    });
                }
                else {
                    console.log(updatedQuestion);
                    this.setState({
                        regError: 'Error: required field is missing'
                    })
                }
            })
    }

    answers = () => {
        return this.state.answers.map((currAnswer, i) => {
            return (
                <tr>
                    <td>
                        <input type="text"
                            name={i}
                            value={currAnswer.text}
                            placeholder='Answer text'
                            onChange={this.onChangeAnswerText}
                        />
                    </td>
                    <td>
                        <input type="number"
                            name={i}
                            placeholder='0'
                            value={currAnswer.weight}
                            onChange={this.onChangeAnswerWeight}
                        />
                    </td>
                    <td><button onClick={this.deleteAnswer} name={i}>Delete</button></td>
                </tr>
            )
        })
    }

    deleteAnswer = (e) => {
        e.preventDefault();
        var i = e.target.name
        var tempAnswers = this.state.answers;
        tempAnswers.splice(i, 1);
        this.setState({
            answers: tempAnswers
        });
    }

    addAnswer = () => {
        this.state.answers.push({
            text: '',
            weight: ''
        });
        this.forceUpdate();
    }

    render() {
        return (
            <div className="formContainer">
                <Link to={'/controlpanel'}>Return to Control Panel</Link>
                <h4>Edit Question</h4>
                <p>{this.state.regError}</p>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Prompt:</label>
                        <input type="text"
                            style={{width: '700px', marginLeft: '20px'}}
                            name="prompt"
                            value={this.state.prompt}
                            onChange={this.onChange}
                        />
                        <br/>
                        <label>Category:</label>
                        <input type="text"
                            style={{width: '700px', marginLeft: '20px'}}
                            name="category"
                            value={this.state.category}
                            onChange={this.onChange}
                        />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Answers</td> <td>Weight</td>
                                </tr>
                                {this.answers()}
                            </tbody>
                        </table>
                        <button type="button" onClick={this.addAnswer}>Add Answer</button>
                        <input type="submit"
                            name="submit"
                            onSubmit={this.onSubmit}
                        />
                    </div>



                </form>
            </div>
        )
    }
}

export default AddQuestion;