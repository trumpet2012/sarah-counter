import React, { Component } from 'react';
import Counter from './Counter';
import ThemeOption from './ThemeOption';

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);

    this.handleThemeSwitch = this.handleThemeSwitch.bind(this);
    this.state = {
      theme: 'fright'
    }
  }

  handleThemeSwitch(theme) {
    console.log("Switch theme:", theme);
    this.setState({
      theme: theme
    });
  }

  render() {
    return (
      <div className={this.state.theme}>
        <div className="theme-panel">
          <ThemeOption name="fright" onClick={() => this.handleThemeSwitch("fright")}/>
          <ThemeOption name="cheesy" onClick={() => this.handleThemeSwitch("cheesy")}/>
        </div>
        <Counter header={this.state.theme === 'fright' ? "She returns in" : "I see my beautiful amazing girlfriend in"}/>
      </div>
    );
  }
}

export default ThemeSwitcher;
