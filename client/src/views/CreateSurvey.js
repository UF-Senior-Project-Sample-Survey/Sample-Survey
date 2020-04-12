import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import '../components/CreateSurvey/QuestionList.css';
import './CreateSurvey.css';
import QuestionList from '../components/CreateSurvey/QuestionList';
import SurveyDesign from '../components/CreateSurvey/SurveyDesign';
import SampleDisplay from '../components/CreateSurvey/SampleDisplay';
import 'react-datasheet/lib/react-datasheet.css';
import axios from 'axios';

class CreateSurvey extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      questions: [],
      selectedQuestions: [],
      currentStep: 1,
      numParticipants: 0,
      samplingMethod: 'srs'
    }
  }

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

  getCategories = () => {
    var mycategories = this.state.questions.map((q, i) => {
        return(q.category);
    });
    var uniqueCategories = [];
    for(var i = 0; i < mycategories.length; i++) {
        if (!uniqueCategories.includes(mycategories[i])) {
            uniqueCategories = uniqueCategories.concat([mycategories[i]]);
        }
    }

    return(uniqueCategories);
}

  continueSurvey() {
    var nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep
    });
  }

  submitQuestions() {
    var categories = this.getCategories();
    const sc = categories
      .filter( c => {
        return(document.getElementById('check-' + c).checked);
      })
      .map(c => {
        return(c);
      })
      
    const sq = this.state.questions
      .filter(q => {
        return (sc.includes(q.category))
      })
      .map(q => {
        return(q)
      });

    this.setState({
      selectedQuestions: sq
    });

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
          questions={this.state.questions}
          categories={this.getCategories()}
        />
        <div className="bottombar">
          <button className="button previous" type="button" value="Submit" onClick={() => this.goBack()}>Previous Step</button>
          <button className="button next" type="button" value="Submit" onClick={() => this.submitQuestions()}>Next Step</button>
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
      <div className='custom-container'>
        <SampleDisplay
          questions={this.state.selectedQuestions}
          numParticipants={this.state.numParticipants}
        />
      </div>

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