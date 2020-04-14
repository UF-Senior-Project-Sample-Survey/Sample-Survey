import NavBar from "../components/Header/NavBar";
import React, {Component} from 'react';
import './Sampling.css';

class Sampling extends Component {

    constructor(props) {
      super(props)
      this.state = {
        samplingMethod: "",
        methodStep: 0,
        selectedsrs: [],
        selectedstrat: [],
        selectedclus: []
      }
    }

    setSamplingMethod(method) {
      this.setState({
        samplingMethod: method,
        methodStep: 0, 
        selectedsrs: [],
        selectedstrat: [],
        selectedclus: []
      });
    }

    generate(method) {
      if (method === 'srs') {
        var srs = [];
        for (var i = 0; i < 30; i++) {
          var newNum = Math.floor((Math.random() * 100) + 1);
          if (srs.includes(newNum)) {
            i--;
          } else {
            srs = srs.concat([newNum]);
          }
        }

        this.setState({
          selectedsrs: srs
        });
      } else if (method === 'stratified') {
        var strat = [];
        for (var i = 1; i < 11; i++) {
          for (var j = 0; j < 3; j++) {
            var newNum = i + '-' + Math.floor((Math.random() * 10) + 1);
            if (strat.includes(newNum)) {
              j--;
            } else {
              strat = strat.concat([newNum]);
            }
          }
        }

        this.setState({
          selectedstrat: strat
        });
      } else if (method === 'cluster') {
        var cluster = [];
        
        for(var i = 0; i < 3; i++) {
          var s = Math.floor((Math.random() * 10) + 1);
          if (cluster.includes(s)) {
            i--;
          } else {
            cluster = cluster.concat([s]);
          }
        }

        this.setState({
          selectedclus: cluster
        });
      }
    }

    resetSample() {
      this.setState({
        selectedsrs: [],
        selectedstrat: [],
        selectedclus: []
      });
    }

    render() {

      var displayRows = [];
      var sDisplay = <div></div>
      var textBox = <div></div>


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
                // if value is selected by random number generator, change class to show it was selected
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

        textBox = 
        <div>
        	<div className='page-header-sample'>
            Simple Random Sample
          </div>
          <div className='section-body2'>
              The simple random sample is the most basic form of sampling. 
              Every sampling unit has an equal probability of being selected. 
              For example, when generating a sample of 30 out of a population of 100, each sampling unit has a probability of .30 of being selected.
              Simple random samples are typically representative of the population.
              <br></br>
              <br></br>
              To perform a simple random sample of 30 out of 100, simply assign a number from 1-100 to each unit, generate 30 random numbers from 1-100, then choose the units corresponding with those 30 generated random numbers to form your sample.
              <br></br>
              <br></br>
              To see an example of a simple random sample, please click "Generate Random Sample" to see our tool generate and visualize a simple random sample of 30 out of a population of 100.
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

        var tableDisplay = displayRows
          .map(mRow => {
            const myvals =
              mRow.r.map(n => {
                var c = 'indiv' + mRow.id;
                // if value is selected by random number generator, change class to show it was selected
                if (this.state.selectedstrat.includes(mRow.id + '-' + n)) {
                  c = 'indiv-selected';
                }
                return(
                  <div className = {c}>
                    {n}
                  </div>
                )
              });

          var rowName = 'myRow' + mRow.id;

            return(
              <div className = {rowName}>
                {myvals}
              </div>
            )
          })

          sDisplay = 
          <div>
            <div className='nav'>
              <button className="button reset" type="button" value="Submit" onClick={() => this.resetSample()}>Reset</button>
              <button className="button generate" type="button" value="Submit" onClick={() => this.generate('stratified')}>Generate Stratified Random Sample</button>
            </div>
            <div className='page-body'>
              {tableDisplay}
            </div>
          </div>


          textBox = 
          <div>
            <div className='page-header-sample'>
              Stratified Sample
            </div>
            <div className='section-body2'>
              A stratified sample involves partitioning the population into subgroups called “strata”.
              The variable chosen to stratify on is typically one that may influence the variable of interest.
              This method ensures that people from each group (strata) are selected.
              The people within a stratum are typically more similar than between strata. 
              <br></br><br></br>
              Steps: <br></br>
              1. Partition your population into subgroups called "strata". <br></br>
              2. Determine the size of each stratum within the population. <br></br>
              3. Take simple random samples within each stratum, selecting a number of people that is representative of the stratum's portion of the overall population. 
              <br></br><div className = 'indent'>For example, say there are 2 strata in a population. Stratum 1 contains 100 sampling units and stratum 2 contains 50 sampling units. 
              To take a stratified sample of 30 from this population, you would calculate that stratum 1 makes up 100/150, or 2/3, of the population and stratum 2 makes up 50/150, or 1/3, of the population.
              That means that you would want 2/3 of your sample to come from stratum 1 and 1/3 to come from stratum 2. 
              Thus, you would take a simple random sample of 2/3 * 30 = 20 from stratum 1 and a sample of 1/3 * 30 = 10 from stratum 2 to form a stratified random sample of 30.</div>
              <br></br><br></br>
              To use the tool, click "Generate Stratified Random Sample" to see an example of a stratified random sample of 30 generated from this population.<br></br><br></br>
              In our visualization, each region (separated by a dotted line) represents a different stratum within a population of 100, forming 10 strata of 10 sampling units.
            </div>
          </div>


      } else if (this.state.samplingMethod === 'cluster') {
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
          {id: 10, r: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
        ];

        var tableDisplay = displayRows
          .map(mRow => {
            const myvals =
              mRow.r.map(n => {
                var c = 'indiv-cluster' + mRow.id
                // if value is selected by random number generator, change class to show it was selected
                if (this.state.selectedclus.includes(mRow.id)) {
                  c = 'indiv-selected';
                }
                return(
                  <div className = {c}>
                    {n}
                  </div>
                )
              });

            var rowName = 'myRow-cluster' + mRow.id
            return(
              <div className = {rowName}>
                {myvals}
              </div>
            )
          })

          sDisplay = 
          <div>
            <div className='nav'>
              <button className="button reset" type="button" value="Submit" onClick={() => this.resetSample()}>Reset</button>
              <button className="button generate" type="button" value="Submit" onClick={() => this.generate('cluster')}>Generate Cluster Sample</button>
            </div>
            <div className='page-body'>
              {tableDisplay}
            </div>
          </div>

          textBox = 
          <div>
            <div className='page-header-sample'>
              Cluster Sampling
            </div>
            <div className='section-body2'>
              A cluster sample involves partitioning the population into different groups called “clusters”.
              Each cluster should ideally be representative of the population. Clusters are usually based on location, as one of the benefits of using cluster sampling is reducing the cost of taking the sample.
              <br></br><br></br>
              Steps:<br></br>
              1. Partition the population into clusters and assign numbers to them. <br></br>
              2. Generate random numbers to select clusters through simple random sampling.<br></br>
              3. Of the selected clusters, you can either include all of the sampling units within the cluster in the sample, or you can perform multi-stage cluster sampling and take simple random samples within the clusters to form your sample.
              <br></br><br></br>
              To use our visualization tool, select "Generate Cluster Sample" to see a single-stage cluster sample taken from a population of 100. Since 3 clusters are being randomly selected, we end up with a sample of 30.
              <br></br><br></br>In our visualization, each region (separated by a dotted line) represents a different cluster within a population of 100, forming 10 clusters of 10 sampling units.
            </div>
          </div>
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
              <div className = 'learn'>
                <div className = 'simulator'>
                  {sDisplay}
                </div>
                <div className = 'explanation'>
                  {textBox}
                </div>
              </div>
            </div>
        </div>
      );
    }
  }

  export default Sampling;