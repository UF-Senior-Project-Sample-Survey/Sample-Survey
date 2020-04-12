import ReactDataSheet from 'react-datasheet';
import React, {Component} from 'react';
import './SampleDisplay.css';
import axios from 'axios';

class SampleDisplay extends Component {  

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            mygrid: []
        }
    }

    componentDidMount() {
        this.getPeople();
    }

    getPeople = () => {
        var people;
        let request = {questions: this.props.questions};
        axios.post('/api/people/getAnswers/' + this.props.numParticipants, request)
            .then(res => {
                people = res.data.people;
                this.setState({mygrid: this.tranformData(people)});
            })
    }

    tranformData(people) {
        console.log(people)
        var mygrid = [];
        var qPrompts = [];

        for(var i = 0; i < people[0].answers.length; i++) {
            qPrompts = qPrompts.concat([{value: people[0].answers[i].prompt}]);
        }

        mygrid[0] = [{value: 'Name'}, {value:'Age'}, {value:'Marital Status'}, {value:'Household Size'}, {value:'Education'}, {value:'Job'}, {value:'Years Experience'}, {value:'Location'}, {value:'Salary'}];
        mygrid[0] = mygrid[0].concat(qPrompts);

        for(var i = 0; i < people.length; i++) {
            var person = people[i];
            var curPerson = [
                {value: person.name.first + " " + person.name.last}, 
                {value: person.age},
                {value: person.maritalStatus},
                {value: person.householdSize},
                {value: person.education}, 
                {value: person.job}, 
                {value: person.yearsExperience}, 
                {value: person.location},
                {value: person.salary}
            ];

            for (var j = 0; j < person.answers.length; j++) {
                curPerson = curPerson.concat([{value: person.answers[j].answer}]);
            }
            mygrid = mygrid.concat([curPerson]);
        }

        return(mygrid)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        //this.getPeople();
        return (
            <div className = 'spreadsheet-container'>
                <ReactDataSheet
                data={this.state.mygrid}
                valueRenderer={(cell) => cell.value}
                />
            </div>
        );
    }
}

export default SampleDisplay;