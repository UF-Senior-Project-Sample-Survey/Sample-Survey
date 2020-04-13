import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ControlPanel.css';
import axios from 'axios';
import NavBar from '../Header/NavBar';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }


    //This function is called when the component is mounted
    componentDidMount = () => {
        this.getQuestions();
    }

    getQuestions = () => {
        axios.get('/api/question/all')
            .then(res => {
                this.setState({ questions: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    questions = () => {
        return this.state.questions.map((curQuestion, i) => {
            return (
                <tr className="controlRow" key={i}>
                    <td>{curQuestion.prompt}</td>
                    <td><Link className="controlLink" to={'question/edit/' + curQuestion._id}>Edit</Link></td>
                    <td><button onClick={() => this.deleteQuestion(curQuestion._id)}>Delete</button></td>
                </tr>
            )
        })
    }

    deleteQuestion = (id) => {

        axios.delete('/api/question/delete/' + id)
            .then(res => {
                console.log(res.data);
                this.getQuestions(); //This refreshed the data after a successful delete has occurred.
            })
            .catch((err) => {
                console.log(err);
            });

    }

    render() {
        return (
            <div className='controlTab'>
                <NavBar />
                <div className="custom-container">
                    <div className="buttonContainer">
                        <Link className="demoButton" to='peopleDemo'> People Maker Demo</Link> 
                        <Link className="createButton" to='question/create'>Create Question</Link>
                    </div>
                    <div className="tableContainer">
                        <h3>Questions</h3>
                        <table style={{ width: 1000}}>
                            <tbody>
                                {this.questions()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default ControlPanel;