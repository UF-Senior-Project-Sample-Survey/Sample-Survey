import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import './CreateSurvey.css';
import QuestionList from '../components/CreateSurvey/QuestionList';
import SelectedQuestionList from '../components/CreateSurvey/SelectedQuestionList';

import data from '../testdata/data'; // testing data, will use actual questions in database for this

class CreateSurvey extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterQuestion: 0,
      selectedQuestions: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterQuestion: value
    })
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
              <SelectedQuestionList
                selectedQuestions={this.state.selectedQuestions}
                data={data}
              />
              <QuestionList
                data={data}
                filterQuestion={this.state.filterQuestion}
                addQuestion={this.addQuestion.bind(this)}
                selectedQuestions={this.state.selectedQuestions}
              />
            </div>
        </div>
      );
    }
  }

  export default CreateSurvey;