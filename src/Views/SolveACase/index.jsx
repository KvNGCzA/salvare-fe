import React, { Component } from 'react';
import Select from 'react-select'
import './index.scss';
import mocks from './__mocks__';
import CaseCard from '../../Components/CaseCard';

const options = [
  { value: 'newest', label: 'newest' },
  { value: 'in court', label: 'in court' },
  { value: 'not in court', label: 'not in court' }
]

class SolveACase extends Component {

  state = {
    resultCount: 12
  }

  changeResultCount = (resultCount) => {
    this.setState({ resultCount })
  }

  render() {
    return(
      <div className="solve-page">
        <p className="mobile-title">all cases</p>
        <div className="head">
          <div className="result-count">
            <button onClick={() => this.changeResultCount(12)}className={this.state.resultCount === 12 ? 'active' : ''}>12</button>
            -
            <button onClick={() => this.changeResultCount(24)}className={this.state.resultCount === 24 ? 'active' : ''}>24</button>
            -
            <button onClick={() => this.changeResultCount(48)}className={this.state.resultCount === 48 ? 'active' : ''}>48</button>
          </div>
          <p className="title">all cases</p>
          <div className="sort-drop">
            <Select options={options} defaultValue={options[0]} isSearchable={false}/>
          </div>
        </div>
        <div className="case-container">
          <div className="card-container">
            {mocks.map((data, index) => (<CaseCard data={data} key={index} />))}
          </div>
        </div>
      </div>
    );
  }
}

export default SolveACase;
