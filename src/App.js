import React, { Component } from "react";
import Header from "./components/Header";
// import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let count = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      type: [],
      array: ["W", "e", "l"]
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="App">Logan Simonsen</h1>
        <h2 className="App">WEB DEVELOPER</h2>
        <br />
        {routes}
      </div>
    );
  }
}

export default App;
