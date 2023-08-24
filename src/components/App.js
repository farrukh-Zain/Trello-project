import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="Header">Trillo FZ & HR</div> */}
        <Header/>

        <Board />
      </div>
    );
  }
}

export default App;
