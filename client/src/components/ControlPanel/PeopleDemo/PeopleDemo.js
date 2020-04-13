import React, { Component } from 'react';
import './PeopleDemo.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class PeopleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            people: [],
            curAnswers: []
        }
        this.onChange = this.onChange.bind(this);
    }

    people = () => {
        return this.state.people.map((curPerson, i) => {
            return (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{curPerson.name.first} {curPerson.name.last}</td>
                    <td>{curPerson.age}</td>
                    <td>{curPerson.maritalStatus}</td>
                    <td>{curPerson.householdSize}</td>
                    <td>{curPerson.education}</td>
                    <td>{curPerson.employment}</td>
                    <td>{curPerson.location}</td>
                    <td>{curPerson.gender}</td>
                    <td><button onClick={(e) => this.getAnswers(e, curPerson)}>View Response</button></td>
                </tr>
            )
        })
    }

    getAnswers = (e, person) => {
        e.preventDefault();
        this.setState({
            curAnswers: person.answers
        });
        this.forceUpdate();
    }

    answers = () => {
        return this.state.curAnswers.map((curAnswer, i) => {
            return (
                <tr key={i}>
                    <td>{curAnswer.prompt}</td>
                    <td>{curAnswer.answer}</td>
                </tr>
            )
        })
    }

    createPeople = (e) => {
        e.preventDefault();
        let request = {
            questions: [{
                _id: "5e8ee3fe04381d3074307abf",
                prompt: "My Question",
                category: "My Category",
                answers: [
                    {
                        _id: "5e8ee3fe04381d3074307ac0",
                        text: "My 1st Unlikely Answer",
                        weight: 2
                    },
                    {
                        _id: "5e8ee3fe04381d3074307ac1",
                        text: "My 2nd Unlikely Answer",
                        weight: 1
                    },
                    {
                        _id: "5e8ee3fe04381d3074307ac2",
                        text: "My Likely Answer",
                        weight: 5
                    }
                ],
                totalWeight: 8,
                __v: 1
            },
            {
                _id: "5e8ee66f3f3b673758f979da",
                prompt: "My 2nd Question",
                category: "Examples",
                answers: [
                    {
                        _id: "5e8ee66f3f3b673758f979db",
                        text: "Answer A",
                        weight: 1
                    },
                    {
                        _id: "5e8ee66f3f3b673758f979dc",
                        text: "Answer B",
                        weight: 2
                    }
                ],
                totalWeight: 3,
                __v: 0
            },
            {
                _id: "5e8f367dcaaa4552c8851b44",
                prompt: "Here's another question?",
                category: "My Category",
                answers: [
                    {
                        _id: "5e8f367dcaaa4552c8851b45",
                        text: "yes",
                        weight: 2
                    },
                    {
                        _id: "5e8f367dcaaa4552c8851b46",
                        text: "no",
                        weight: 3
                    },
                    {
                        _id: "5e8f367dcaaa4552c8851b47",
                        text: "maybe?",
                        weight: 5
                    }
                ],
                totalWeight: 10,
                __v: 0
            }]
        }
        axios.post('/api/people/getAnswers/' + this.state.amount, request)
            .then(res => {
                this.setState({
                    people: res.data.people
                })
            })
        this.forceUpdate();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="entryTable">
                <Link to={'/controlpanel'}>Return to Control Panel</Link>
                <h3>Person Creation Demo</h3>
                <p>{this.state.regError}</p>
                <div>

                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: 100 }}>Amount:</td>
                                <td><input type="number"
                                    name="amount"
                                    value={this.state.amount}
                                    onChange={this.onChange}
                                /></td>
                            </tr>
                        </tbody>
                        <table>
                            <thead>
                                <td>Questions</td>
                                <td>Answer</td>
                            </thead>
                            <tbody>
                                {this.answers()}
                            </tbody>
                        </table>
                        <button onClick={this.createPeople}>Create People</button>
                    </table>
                    <table>
                        <thead>
                            <td>Entry</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Marital Status</td>
                            <td>Household Size</td>
                            <td>Education</td>
                            <td>Employment</td>
                            <td>Location</td>
                            <td>Gender</td>
                        </thead>
                        <tbody>
                            {this.people()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default PeopleDemo;