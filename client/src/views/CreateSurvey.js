import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import '../components/CreateSurvey/QuestionList.css';
import './CreateSurvey.css';
import QuestionList from '../components/CreateSurvey/QuestionList';

import data from '../testdata/data'; // testing data, will use actual questions in database for this

class CreateSurvey extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedQuestions: []
    }
  }

  addQuestion(id) {
    const list = this.state.selectedQuestions.concat([id])
    this.setState({
      selectedQuestions: list
    })
  }
  
  render() {
      return (
        <div>
            <NavBar/>
            <div className = "container">
              <QuestionList
                data={data}
              />
            </div>
        </div>
      );
    }
  }

  export default CreateSurvey;