import React, {Component} from 'react';
import './SurveyDesign.css'
import {Link} from 'react-router-dom';

class SurveyDesign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            samplingmethod: ''
        }
    }

    setNumParticipants() {
        const n = this.nValue.value;
        this.props.setNumberofParticipants(n);
    }

    setSamplingMethod(s) {
        this.setState({
            samplingmethod: s
        });
        this.props.setSamplingMethod(s)
    }

    setExcelName() {
        const name = this.nameValue.value;
        this.props.setExcelName(name);
    }

    render() {
        var srsbutton, stratbutton, clusterbutton;

        if (this.state.samplingmethod === 'srs') {
            srsbutton = "button selections";
            stratbutton = "button selectiona";
            clusterbutton = "button selectiona";
        } else if (this.state.samplingmethod === 'stratified') {
            srsbutton = "button selectiona";
            stratbutton = "button selections";
            clusterbutton = "button selectiona";
        } else if (this.state.samplingmethod === 'cluster') {
            srsbutton = "button selectiona";
            stratbutton = "button selectiona";
            clusterbutton = "button selections";
        } else {
            srsbutton = "button selectiona";
            stratbutton = "button selectiona";
            clusterbutton = "button selectiona";
        }

        return (
        <div className = 'formContainer'>
            <form>
                <label>Number of Survey Participants:</label>
                <input type="text" style={{width: '200px', marginLeft: '20px'}} ref={(value) => this.nValue = value} id="numPeople" name="numPeople" onChange={() => this.setNumParticipants()}></input> <br></br>
                <label>Select a Sampling Method for Your Survey:</label><br></br>
                <div>
                    <button className={srsbutton} type="button" value="srs" onClick={() => this.setSamplingMethod('srs')}>
                        Simple Random Sampling
                    </button>
                    <button className={stratbutton} type="button" value="stratified" onClick={() => this.setSamplingMethod('stratified')}>
                        Stratified Random Sampling
                    </button>
                    <button className={clusterbutton} type="button" value="cluster" onClick={() => this.setSamplingMethod('cluster')}>
                        Cluster Sampling
                    </button>
                </div>
                <div className='myLink'><Link to="/samplingmethods" className="a">Learn more about these sampling methods</Link></div>
            </form>
        </div>
        );
    }
}

export default SurveyDesign;