import React, { Component } from "react";
import Lottery from "./components/Lottery";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Lottery />
        </div>
      </div>
    );
  }
}

export default App;
