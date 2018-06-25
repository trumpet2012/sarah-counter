import React, { Component } from 'react';
import './Countdown.css';

class Countdown extends Component {

  constructor(props) {
    super(props);

    this.getTimeRemaining = this.getTimeRemaining.bind(this);
    this.state = {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => {
          this.getTimeRemaining();
        },
        1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  getTimeRemaining(){
    this.setState({
      animateSeconds: false,
      animateMinutes: false,
      animateHours: false,
      animateDays: false
    });

    let t = Date.parse(this.props.endTime) - Date.parse(new Date());
    let seconds = Math.floor( (t/1000) % 60 );
    let minutes = Math.floor( (t/1000/60) % 60 );
    let hours = Math.floor( (t/(1000*60*60)) % 24 );
    let days = Math.floor( t/(1000*60*60*24) );

    if (this.state.seconds !== seconds){
      this.setState({animateSeconds: true});
    }

    if (this.state.minutes !== minutes){
      this.setState({animateMinutes: true});
    }

    if (this.state.hours !== hours){
      this.setState({animateHours: true});
    }

    if (this.state.days !== days){
      this.setState({animateDays: true});
    }

    this.setState({
      total: t,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days,
    });
  }

  render() {
    return (
      <div className="countdown">
        <span className="time-block">
          <span className={"time days"+ (this.state.animateDays ? " animate" : "")}>{this.state.days}</span><span className="label"> day{this.state.days !== 1 && "s"}</span>
        </span>
        <span className="time-block">
          <span className={"time hours"+ (this.state.animateHours ? " animate" : "")}>{this.state.hours}</span><span className="label"> hour{this.state.hours !== 1 && "s"}</span>
        </span>
        <span className="time-block">
          <span className={"time minutes" + (this.state.animateMinutes ? " animate" : "")}>{this.state.minutes}</span><span className="label"> minute{this.state.minutes !==1 && "s"}</span>
        </span>
        <span className="time-block">
          <span className={"time seconds" + (this.state.animateSeconds ? " animate" : "")}>{this.state.seconds}</span><span className="label"> second{this.state.seconds !== 1 && "s"}</span>
        </span>
      </div>
    );
  }
}

export default Countdown;