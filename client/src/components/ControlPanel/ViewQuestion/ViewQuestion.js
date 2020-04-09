import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewQuestion.css'
class ViewChefProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: '',
            category: '',
            answers: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/question/find/' + this.props.match.params.id)
            .then(res => {
                this.setState(res.data);
            })
    }
    answers() {
        return this.state.answers.map((curAnswer, i) => {
            return (
                <tr>
                    <td>{curAnswer.text}</td> <td>{curAnswer.weight}</td>
                </tr>
            )
        })
    }
    selectRandom = () => {
        let weight = Math.floor(Math.random() * this.state.totalWeight) + 1; //Generates a random integer between 1 and totalWeight
        let tempWeight= weight //
        let answer;
        for (let i = 0; i <this.state.answers.length; i++) {
            weight -= this.state.answers[i].weight;
            answer = this.state.answers[i].text;
            if (weight <= 0) {
                this.setState({
                    randomAnswer: answer,
                    tempWeight: tempWeight
                })
                break;
            }
        }
    }

    render() {
        return (
            <div className="entryTable">
                <Link to={'/Controlpanel'}>Return to Questions</Link>
                <h3>Prompt: </h3>
                {this.state.prompt}
                <h4>Category:</h4>
                {this.state.category}
                <h6><b>Total Weight:</b>  {this.state.totalWeight}</h6>
                <table>
                    <tbody>
                        <tr>
                            <td>Answer</td> <td>Weight</td>
                        </tr>
                        {this.answers()}
                    </tbody>
                </table>
                <td><button onClick={this.selectRandom}>Randomly Generate Answer</button></td>
                {this.state.randomAnswer}
                <br/>
                Random Value: {this.state.tempWeight}
            </div>
        )
    }
}
export default ViewChefProfile