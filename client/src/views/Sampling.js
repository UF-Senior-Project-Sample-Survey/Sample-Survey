import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import './Sampling.css';

class Sampling extends Component {

    constructor(props) {
      super(props)
      this.state = {
        samplingMethod: "",
        methodStep: 0,
        selectedsrs: []
      }
    }

    setSamplingMethod(method) {
      this.setState({
        samplingMethod: method,
        methodStep: 0, 
        selectedsrs: []
      });
    }

    generate(method) {
      if (method === 'srs') {
        var srs = [];
        for (var i = 0; i < 20; i++) {
          srs = srs.concat([Math.floor((Math.random() * 100) + 1)]);
        }

        this.setState({
          selectedsrs: srs
        });
      }
    }

    render() {

      var displayRows = [];
      var sDisplay = <div></div>

      if (this.state.samplingMethod === 'srs') {
        displayRows = [
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
                        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
                        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
                        [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                        [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
                      ];
        var tableDisplay = displayRows
          .map(r => {
            const myRow =
              r.map(n => {
                var c = 'indiv';
                // if value is selected by random number generator, change class to show it was selection
                if (this.state.selectedsrs.includes(n)) {
                  c = 'indiv-selected'
                }
                return(
                  <div className = {c}>
                    {n}
                  </div>
                )
              });
            return(
              <div className = 'myRow'>
                {myRow}
              </div>
            )
          })

        sDisplay = 
          <div>
            <div className='nav'>
              <button className="button reset" type="button" value="Submit" onClick={() => this.resetSample()}>Reset</button>
              <button className="button generate" type="button" value="Submit" onClick={() => this.generate('srs')}>Generate Simple Random Sample</button>
            </div>
            <div className='page-body'>
              {tableDisplay}
            </div>
          </div>
      } else if (this.state.samplingMethod === 'stratified') {
        displayRows = [
          {id: 1, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 2, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 3, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 4, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 5, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 6, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 7, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 8, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 9, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 10, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        ];
      } else if (this.state.samplingMethod === 'cluster') {
        displayRows = [
          {id: 1, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 2, r: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]},
          {id: 3, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 4, r: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]},
          {id: 5, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 6, r: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]},
          {id: 7, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 8, r: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]},
          {id: 9, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
          {id: 10, r: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]},
        ]
      }



      return (
        <div>
            <NavBar/>
            <div className='custom-container'>
              <div className='page-header'>
                Select a Sampling Method to Learn More
              </div>
              <div className="page-selection">
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
              {sDisplay}
            </div>
        </div>
      );
    }
  }

  export default Sampling;