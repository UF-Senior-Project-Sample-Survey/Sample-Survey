import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import '../components/CreateSurvey/QuestionList.css';
import './CreateSurvey.css';
import QuestionList from '../components/CreateSurvey/QuestionList';
import SurveyDesign from '../components/CreateSurvey/SurveyDesign';

import data from '../testdata/data'; // testing data, will use actual questions in database for this

class CreateSurvey extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCategories: [],
      currentStep: 1,
      numParticipants: 0,
      samplingMethod: 'SRS',
      excelName: 'dataset'
    }
  }


  continueSurvey() {
    var nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep
    })
  }

  addCategory(id) {
    var list= this.state.selectedCategories.concat([id])
    this.setState({
      selectedCategories: list
    })
  }
  
  setNumberofParticipants(n) {
    this.setState({
      numParticipants: n
    });
  }


  render() {

    var display;

    var questionSelection = 
      <div>
        <div>Select which questions you want featured in your survey:</div>
        <QuestionList
          data={data}
          addCategory={this.addCategory.bind(this)}
          selectedCategories = {this.state.selectedCategories}
        />
        <div className="bottombar">
          <button type="button" value="Submit" onClick={() => this.continueSurvey()}>Next Step</button>
        </div>
      </div>

    var surveyDesign = 
      <div>
        <div className = 'design'>Design your survey: </div>
        <SurveyDesign
          setNumberofParticipants={this.setNumberofParticipants.bind(this)}
        />
      </div>

    if (this.state.currentStep === 1) {
      display = questionSelection;
    } else if (this.state.currentStep === 2) {
      display = surveyDesign;
    }

      return (
        <div>
            <NavBar/>
            <div className = 'container'>
              {display}
            </div>
        </div>
      );
    }
  }

  export default CreateSurvey;