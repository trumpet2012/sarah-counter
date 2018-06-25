import React, { Component } from 'react';
import './Counter.css';
import Countdown from './Countdown';
import Header from './Header';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="counter-wrapper">
          <Header text={this.props.header}/>
          <Countdown endTime='August 21 2018'/>
        </div>
      </div>
    );
  }
}

export default Counter;
