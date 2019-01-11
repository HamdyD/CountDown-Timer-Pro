import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25 2019",
      newDeadLine: ""
    };
    // this.changeDeadline = this.changeDeadline.bind(this); Don't need to bind the method with the ES6 anonymous function () =>
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadLine });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <div>
          <input
            placeholder="new date"
            onChange={e => this.setState({ newDeadLine: e.target.value })}
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}
