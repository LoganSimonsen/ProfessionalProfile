import React, { Component } from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

class Accomplishments extends Component {
  render() {
    return (
      <div className="story">
        <Link to="/" className="backButton">
          X
        </Link>
        <div className="projectsWrapper">
          <a href="https://contentum.now.sh/#/">
            <h1>Contentum</h1>
            <br />
            <Iframe
              url="https://contentum.now.sh/#/"
              width="450px"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
              title="CONTENTUM"
            />
          </a>
          <br />
          <br />
          <a href="https://openlibrarysearch.now.sh/#/">
            <h1>Open Library Search</h1>
            <br />
            <Iframe
              url="https://openlibrarysearch.now.sh/#/"
              width="450px"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </a>
          <br />
          <br />
          <a href="https://openlibrarysearch.now.sh/#/">
            <h1>Dashy Boards</h1>
            <br />
            <Iframe
              url="https://dashyboards.now.sh/#/"
              width="450px"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Accomplishments;
