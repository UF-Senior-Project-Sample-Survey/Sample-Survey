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
      selectedCategories: []
    }
  }

  continueSurvey() {
    console.log(this.state.selectedCategories)
  }

  addCategory(id) {
    var list;
    if(!this.state.selectedCategories.includes(id)) {
      list = this.state.selectedCategories.concat([id])
    } else {
      for (var i = 0; i < this.state.selectedCategories.length; i++) {
        if (this.state.selectedCategories[i] === id) {
          list = this.state.selectedCategories.splice(i,1);
          i--;
        }
      }
    }
    this.setState({
      selectedCategories: list
    }, this.handleSubmit)
  }
  
  render() {

    var display = 
      <div>
        <div>Select which questions you want featured in your survey:</div>
        <QuestionList
          data={data}
          addCategory={this.addCategory.bind(this)}
          selectedCategories = {this.state.selectedCategories}
        />
        <div className="bottombar">
          <button type="submit" value="Submit" onClick={() => this.continueSurvey()}>Continue</button>
        </div>
      </div>

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