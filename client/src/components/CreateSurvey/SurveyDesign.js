import React, {Component} from 'react';
import './SurveyDesign.css'
import {Link} from 'react-router-dom';

class SurveyDesign extends Component {

    setNumParticipants() {
        const n = this.nValue.value;
        this.props.setNumberofParticipants(n);
    }

    setSamplingMethod(s) {
        this.props.setSamplingMethod(s)
    }

    setExcelName() {
        const name = this.nameValue.value;
        this.props.setExcelName(name);
    }

    render() {
        return (
        <div className = 'formContainer'>
            <form>
                <label>Number of Survey Participants:</label>
                <input type="text" style={{width: '200px', marginLeft: '20px'}} ref={(value) => this.nValue = value} id="numPeople" name="numPeople" onChange={() => this.setNumParticipants()}></input> <br></br>
                <label>Select a Sampling Method for Your Survey:</label><br></br>
                <div>
                    <button className="button selection" type="button" value="srs" onClick={() => this.setSamplingMethod('srs')}>
                        Simple Random Sampling
                    </button>
                    <button className="button selection" type="button" value="stratified" onClick={() => this.setSamplingMethod('stratified')}>
                        Stratified Random Sampling
                    </button>
                    <button className="button selection" type="button" value="cluster" onClick={() => this.setSamplingMethod('cluster')}>
                        Cluster Sampling
                    </button>
                </div>
                <div className='myLink'><Link to="/samplingmethods" classname="a">Learn more about these sampling methods</Link></div>
                <label>Name of Generated Excel File:</label>
                <input type="text" style={{width: '200px', marginLeft: '20px'}} ref={(value) => this.nameValue = value} id="excelName" name="excelName" onChange={() => this.setExcelName()}></input>
                
            </form>
        </div>
        );
    }
}

export default SurveyDesign;