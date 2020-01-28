import React, { Component } from 'react';
import Select, { components } from 'react-select'
import './index.scss';
import dropdownIndicator from '../../images/dropdown-indicator.svg';
import mocks from './__mocks__';

const options = [
  { value: 'newest', label: 'newest' },
  { value: 'in court', label: 'in court' },
  { value: 'vanilla', label: 'Vanilla' }
]
const DropdownIndicator = () => {
  return (
    <components.DropdownIndicator>
      <img src={dropdownIndicator}/>
    </components.DropdownIndicator>
  );
};

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
        <div className="head">
          <div className="result-count">
            <button onClick={() => this.changeResultCount(12)}className={this.state.resultCount === 12 ? 'active' : ''}>12</button>
            -
            <button onClick={() => this.changeResultCount(24)}className={this.state.resultCount === 24 ? 'active' : ''}>24</button>
            -
            <button onClick={() => this.changeResultCount(48)}className={this.state.resultCount === 48 ? 'active' : ''}>48</button>
          </div>
          <p>all cases</p>
          <div className="sort-drop">
            <Select options={options} defaultValue={options[0]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SolveACase;
