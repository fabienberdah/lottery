import React, { Component } from "react";
import Ball from "./Ball";
import "../styles/Lottery.css";

export class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.play = this.play.bind(this);
  }

  play = () => {
    const results = [];
    for (let i = 0; i < 8; i++) {
      let result = Math.floor(Math.random() * 40 + 1);
      while (results.includes(result)) {
        result = Math.floor(Math.random() * 40 + 1);
      }
      results.push(result);
    }
    this.setState({ results: results });
  };

  render() {
    const renderResults = this.state.results.map((result) => {
      return <Ball value={result} />;
    });

    return (
      <div className="Lottery">
        <div className="Lottery-container">
          <h1 className="Lottery-title">Lottery</h1>
          <div className="Lottery-results">{renderResults}</div>
          <button onClick={this.play}>Play</button>
        </div>
      </div>
    );
  }
}

export default Lottery;
