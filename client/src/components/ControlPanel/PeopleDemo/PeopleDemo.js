import React, { Component } from 'react';
import './PeopleDemo.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class PeopleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            people: []
        }
        this.onChange = this.onChange.bind(this);
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    people = () => {
        return this.state.people.map((curPerson, i) => {
            return (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{this.state.people[i].name.first} {this.state.people[i].name.last}</td>
                    <td>{this.state.people[i].age}</td>
                    <td>{this.state.people[i].maritalStatus}</td>
                    <td>{this.state.people[i].householdSize}</td>
                    <td>{this.state.people[i].education}</td>
                    <td>{this.state.people[i].job}</td>
                    <td>{this.state.people[i].location}</td>
                    <td>{this.state.people[i].yearsExperience}</td>
                    <td>{'$' + this.formatNumber(this.state.people[i].salary)}</td>
                    <td>{this.state.people[i].gender}</td>
                </tr>
            )
        })

    }

    createPeople = (e) => {
        e.preventDefault();
        axios.get('/api/people/' + this.state.amount)
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
                <h3>Person creation demo</h3>
                <p>{this.state.regError}</p>
                <form onSubmit={this.onSubmit}>
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
                            <button onClick={this.createPeople}>Create People</button>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <td>Entry</td>
                                    <td>Name</td>
                                    <td>Age</td>
                                    <td>Marital Status</td>
                                    <td>Household Size</td>
                                    <td>Education</td>
                                    <td>Job</td>
                                    <td>Location</td>
                                    <td>Years Experience</td>
                                    <td>Salary</td>
                                    <td>Gender</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.people()}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        )
    }
}
export default PeopleDemo;