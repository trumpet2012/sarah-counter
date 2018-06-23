import React, { Component } from 'react';
import './Counter.css';
import Countdown from './Countdown';
import Header from './Header';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="counter-wrapper">
          <Header text="She returns in"/>
          <Countdown endTime='August 25 2018'/>
        </div>
      </div>
    );
  }
}

export default Counter;
