import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import '../components/CreateSurvey/QuestionList.css';
import './CreateSurvey.css';
import QuestionList from '../components/CreateSurvey/QuestionList';
import SurveyDesign from '../components/CreateSurvey/SurveyDesign';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

import mydata from '../testdata/data'; // testing data, will use actual questions in database for this

class CreateSurvey extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCategories: [],
      currentStep: 1,
      numParticipants: 0,
      samplingMethod: 'SRS',
      excelName: 'dataset',
      grid: [
        [{value: 1}, {value: 3}],
        [{value: 2}, {value: 4}]
      ]
    }
  }


  continueSurvey() {
    var nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep
    });
  }

  submitQuestions(d) {
    const sc = d
      .filter( c => {
        return(document.getElementById('check' + c.id).checked);
      })
      .map(c => {
        return(c.id);
      })
      
      this.setState({
        selectedCategories: sc
      })

    var nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep
    })
  }

  goBack() {
    var nextStep = this.state.currentStep - 1;
    this.setState({
      currentStep: nextStep
    });
  }
  
  setNumberofParticipants(n) {
    this.setState({
      numParticipants: n
    });
  }

  setSamplingMethod(s) {
    this.setState({
      samplingMethod: s
    });
  }


  render() {

    var display;

    var questionSelection = 
      <div className='custom-container'>
        <div>Select which questions you want featured in your survey:</div>
        <QuestionList
          data={mydata}
        />
        <div className="bottombar">
          <button className="button previous" type="button" value="Submit" onClick={() => this.goBack()}>Previous Step</button>
          <button className="button next" type="button" value="Submit" onClick={() => this.submitQuestions(mydata)}>Next Step</button>
        </div>
      </div>

    var surveyDesign = 
      <div className='container'>
        <div className = 'design'>Design your survey: </div>
        <SurveyDesign
          setNumberofParticipants={this.setNumberofParticipants.bind(this)}
          setSamplingMethod={this.setSamplingMethod.bind(this)}
        />
        <div className="bottombar">
          <button className="button next" type="button" value="Submit" onClick={() => this.continueSurvey()}>Next Step</button>
        </div>
      </div>

// add a generate spreadsheet button to set the values of the spreadsheet and call randomization fxns
    var spreadSheet = 
        <ReactDataSheet
          data={this.state.grid}
          valueRenderer={(cell) => cell.value}
          onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row])
            changes.forEach(({cell, row, col, value}) => {
              grid[row][col] = {...grid[row][col], value}
            })
            this.setState({grid})
          }}
        />

    if (this.state.currentStep === 1) {
      display = surveyDesign;
    } else if (this.state.currentStep === 2) {
      display = questionSelection;
    } else if (this.state.currentStep === 3) {
      display = spreadSheet;
    }

      return (
        <div>
            <NavBar/>
            {display}
        </div>
      );
    }
  }

  export default CreateSurvey;