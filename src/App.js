import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import TourList from "./Components/Tourlist/Tourlist.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
