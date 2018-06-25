import React, { Component } from 'react';
import './ThemeOption.css';

class ThemeOption extends Component {
  render() {
    return (
      <div className="theme-option" onClick={this.props.onClick}>
        {this.props.name}
      </div>
    );
  }
}

export default ThemeOption;
