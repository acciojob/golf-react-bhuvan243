import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    const newLeftPosition = parseInt(this.state.ballPosition.left) + 5;
    // console.log(newLeftPosition);
    this.setState({
      ...this.state,
      renderBall: !this.state.renderBall,
      ballPosition: { left: `${newLeftPosition}px` },
    });
  }
  moveBallToRight() {
    const newLeftPosition = parseInt(this.state.ballPosition.left) + 5;
    // console.log(newLeftPosition);
    this.setState({
        ...this.state,
        ballPosition: { left: `${newLeftPosition}px` },
      });
  }
  renderBallOrButton() {
    // console.log(this.state);
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  // bind ArrowRight keydown event
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.moveBallToRight();
      }
    });
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
