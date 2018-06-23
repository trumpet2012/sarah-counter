import React, { Component } from 'react';
import Counter from './Counter';

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: 'fright'
    }
  }

  render() {
    return (
      <div className={this.state.theme}>
        <Counter header={this.state.theme === 'fright' ? "She returns in" : "I see my beautiful amazing girlfriend in"}/>
      </div>
    );
  }
}

export default ThemeSwitcher;
