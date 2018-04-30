import React, { Component } from "react";
import { Link } from "react-router-dom";

class Story extends Component {
  render() {
    return (
      <div className="story">
        <Link to="/" className="backButton">
          X
        </Link>Story stuff here
      </div>
    );
  }
}

export default Story;
