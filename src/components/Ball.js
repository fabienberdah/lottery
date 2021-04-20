import React, { Component } from "react";
import "../styles/Ball.css";
export class Ball extends Component {
  render() {
    return (
      <div>
        <div className="Ball">{this.props.value}</div>
      </div>
    );
  }
}

export default Ball;
