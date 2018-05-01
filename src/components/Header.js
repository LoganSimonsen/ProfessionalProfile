import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="catsWrapper">
          <div className="cats">
            <Link className="linkClass" to="/Story">
              STORY
            </Link>
          </div>
          <div className="cats">
            <Link to="/Skills">SKILLS</Link>
          </div>
          <div className="cats">
            <Link to="/Accomplishments">Projects</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
