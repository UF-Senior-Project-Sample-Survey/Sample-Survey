import ReactDataSheet from 'react-datasheet';
import React, { Component } from 'react';
import './SampleDisplay.css';
import axios from 'axios';
import { CSVLink } from 'react-csv';

class SampleDisplay extends Component {  

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            mygrid: [],
            button: <div></div>
        }
    }

    goBack() {
        this.props.goBack();
    }

    componentDidMount() {
        this.getPeople();
    }

    getPeople = () => {
        if (this.props.samplingMethod === 'stratified') {
            var people, csvData, csvHeaders;
            let request = {questions: this.props.questions};
            axios.post('/api/people/getAnswersStratified/' + this.props.numParticipants + '/' + this.props.strataVariable, request)
                .then(res => {
                    people = res.data.people;
                    csvData = this.formatDataToCSVStratified(people);
                    csvHeaders = this.getCSVHeadersStratified(people);
                    this.setState({
                        mygrid: this.tranformDataStratified(people),
                        people: people,
                        button: <CSVLink filename="survey-data.csv" data={csvData} headers={csvHeaders}>Download CSV</CSVLink>
                    });
                })
        } else {
            var people, csvData, csvHeaders;
            let request = {questions: this.props.questions};
            axios.post('/api/people/getAnswers/' + this.props.numParticipants, request)
                .then(res => {
                    people = res.data.people;
                    csvData = this.formatDataToCSV(people);
                    csvHeaders = this.getCSVHeaders(people);
                    this.setState({
                        mygrid: this.tranformData(people),
                        people: people,
                        button: <CSVLink filename="survey-data.csv" data={csvData} headers={csvHeaders}>Download CSV</CSVLink>
                    });
                })
        }
    }

    formatDataToCSV(people) {
        var cleanData = [];

        for(var i = 0; i < people.length; i++) {
            var answers = [];

            var person = people[i];

            for (var j = 0; j < person.answers.length; j++) {
                answers = answers.concat([person.answers[j].answer]);
            }

            var curPerson = [person.name.first + " " + person.name.last, person.age, person.gender, person.maritalStatus, person.education, person.employment, person.location, person.householdSize];

            curPerson = curPerson.concat(answers);

            cleanData = cleanData.concat([curPerson]);
        }

        return(cleanData);
    }

    formatDataToCSVStratified(people) {
        var cleanData = [];

        for(var i = 0; i < people.length; i++) {
            var answers = [];

            var person = people[i];

            for (var j = 0; j < person.answers.length; j++) {
                answers = answers.concat([person.answers[j].answer]);
            }

            var curPerson = [person.name.first + " " + person.name.last, person.strata, person.age, person.gender, person.maritalStatus, person.education, person.employment, person.location, person.householdSize];

            curPerson = curPerson.concat(answers);

            cleanData = cleanData.concat([curPerson]);
        }

        return(cleanData);
    }

    getCSVHeaders(people) {
        var header = ['Name', 'Age', 'Gender', 'Marital Status', 'Education', 'Employment', 'Location', 'Household Size'];
        
        for (var j = 0; j < people[0].answers.length; j++) {
            header = header.concat([people[0].answers[j].prompt]);
        }

        return(header);
    }

    getCSVHeadersStratified(people) {
        var header = ['Name', 'Stratum', 'Age', 'Gender', 'Marital Status', 'Education', 'Employment', 'Location', 'Household Size'];
        
        for (var j = 0; j < people[0].answers.length; j++) {
            header = header.concat([people[0].answers[j].prompt]);
        }

        return(header);
    }

    tranformData(people) {
        var mygrid = [];
        var qPrompts = [];

        for(var i = 0; i < people[0].answers.length; i++) {
            qPrompts = qPrompts.concat([{value: people[0].answers[i].prompt}]);
        }

        mygrid[0] = [{value: 'Name'}, {value:'Age'}, {value: 'Gender'}, {value:'Marital Status'}, {value:'Education'}, {value:'Employment'}, {value:'Location'}, {value:'Household Size'}];
        mygrid[0] = mygrid[0].concat(qPrompts);

        for(var k = 0; k < people.length; k++) {
            var person = people[k];
            var curPerson = [
                {value: person.name.first + " " + person.name.last}, 
                {value: person.age}, 
                {value: person.gender}, 
                {value: person.maritalStatus}, 
                {value: person.education}, 
                {value: person.employment}, 
                {value: person.location}, 
                {value: person.householdSize}
            ];

            for (var j = 0; j < person.answers.length; j++) {
                curPerson = curPerson.concat([{value: person.answers[j].answer}]);
            }
            mygrid = mygrid.concat([curPerson]);
        }

        return(mygrid)
    }

    tranformDataStratified(people) {
        var mygrid = [];
        var qPrompts = [];

        for(var i = 0; i < people[0].answers.length; i++) {
            qPrompts = qPrompts.concat([{value: people[0].answers[i].prompt}]);
        }

        mygrid[0] = [{value: 'Name'}, {value: 'Stratum'}, {value:'Age'}, {value: 'Gender'}, {value:'Marital Status'}, {value:'Education'}, {value:'Employment'}, {value:'Location'}, {value:'Household Size'}];
        mygrid[0] = mygrid[0].concat(qPrompts);

        for(var k = 0; k < people.length; k++) {
            var person = people[k];
            var curPerson = [
                {value: person.name.first + " " + person.name.last}, 
                {value: person.strata}, 
                {value: person.age}, 
                {value: person.gender}, 
                {value: person.maritalStatus}, 
                {value: person.education}, 
                {value: person.employment}, 
                {value: person.location}, 
                {value: person.householdSize}
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
        return(
            <div className = 'sheet-page-body'>
                <div className = 'data-header'>Survey Data</div>
                <div className = "spreadsheet-button">
                    <button className='button regenerate' type='button' value='regen' onClick = {() => this.getPeople()}>Regenerate Sample</button>
                    <div className = 'csv-link'>{this.state.button}</div>
                </div>
                <div className = 'spreadsheet-container'>
                    <ReactDataSheet
                        data={this.state.mygrid}
                        valueRenderer={(cell) => cell.value}
                    />
                </div>
                <div className="bottombar">
                    <button className="button previouss" type="button" value="Submit" onClick={() => this.goBack()}>Previous Step</button>
                </div>    
            </div>
        );
    }
}

export default SampleDisplay;