import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import './CreateSurvey.css';
import QuestionList from '../components/CreateSurvey/QuestionList';
import data from '../testdata/data'; // testing data, will use actual questions in database for this

class CreateSurvey extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterQuestion: 0
    }
  }

  filterUpdate(value) {
    this.setState({
      filterQuestion: value
    })
  }

  
  render() {
      return (
        <div>
            <NavBar/>
            <div className = "container">
              <QuestionList
                data={data}
                filterQuestion={this.state.filterQuestion}
              />
            </div>
        </div>
      );
    }
  }

  export default CreateSurvey;