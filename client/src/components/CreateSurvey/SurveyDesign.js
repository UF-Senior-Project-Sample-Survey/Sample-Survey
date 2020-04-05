import React, {Component} from 'react';
import './SurveyDesign.css'
import {Link} from 'react-router-dom';

class SurveyDesign extends Component {

    setNumParticipants() {
        const n = this.nValue.value;
        this.props.setNumberofParticipants(n);
    }

    render() {
        return (
        <div className = 'formContainer'>
            <form>
                <label>Number of Survey Participants:</label>
                <input type="text" style={{width: '200px', marginLeft: '20px'}} ref={(value) => this.nValue = value} id="numPeople" name="numPeople" onChange={() => this.setNumParticipants()}></input> <br></br>
                <label>Select a Sampling Method for Your Survey:</label><br></br>
                <div>
                    <button type="button" value="Submit">
                        Simple Random Sampling
                    </button>
                    <button type="button" value="Submit">
                        Stratified Random Sampling
                    </button>
                    <button type="button" value="Submit">
                        Cluster Sampling
                    </button>
                </div>
                <div className='myLink'><Link to="/samplingmethods" classname="a">Learn more about these sampling methods</Link></div>
                <label>Name of Generated Excel File:</label>
                <input type="text" style={{width: '200px', marginLeft: '20px'}} ref={(value) => this.nValue = value} id="numPeople" name="numPeople" onChange={() => this.setNumParticipants()}></input>
            </form>
        </div>
        );
    }
}

export default SurveyDesign;