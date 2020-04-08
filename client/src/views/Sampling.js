import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import './Sampling.css';

class Sampling extends Component {
    render() {
      return (
        <div>
            <NavBar/>
            <div className='custom-container'>
              <div className='page-header'>
                Select a Sampling Method to Learn More
              </div>
              <div className="page-body">
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
            </div>
        </div>
      );
    }
  }

  export default Sampling;