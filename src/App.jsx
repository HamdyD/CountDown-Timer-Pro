import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";
import { Form, FormControl, Button } from "react-bootstrap";

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
        <h1>
          <strong>UP TO 70% OFF !</strong>
        </h1>
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        {/* When inline = {true}, can be just inline in React*/}
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={e => this.setState({ newDeadLine: e.target.value })}
          />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}
