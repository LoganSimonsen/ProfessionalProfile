import React, { Component } from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

class Story extends Component {
  render() {
    return (
      <div className="story storyBackground">
        <Link to="/" className="backButton">
          X
        </Link>
        <img
          src="http://www.cardtronics.com/img/cardtronics-footer-logo.png"
          style={{ width: "200px", height: "57px" }}
        />
        <p
          style={{
            textAlign: "left",
            padding: "20px",
            color: "white",
            fontSize: "1.2em"
          }}
        >
          &emsp;&emsp; Last year I was working as a lead member of the Service
          Desk Infrastructure Support Team at
          <a href="www.cardtronics.com">Cardtronics</a>, an ATM company in
          Frisco, TX. Cardtronics not only owns ATM's, but they also provide the
          transaction network to allow customers to connect with their financial
          institutions. The Infrastructure Support Team's job was to monitor
          this EFT environment (servers, network devices, and SQL Databases) and
          provide major incident management in the case of any outage. As a lead
          for this team my job was to be the primary incident manager and point
          man for major incidents that occurred during my shift or when I was on
          call. I was responsible for company wide communication, in the form of
          email bulletins, to update the company on incident status and eventual
          resolution. I directly communicated with senior management, including
          our CIO, regarding incident status. <br />
          <br />
          &emsp;&emsp; During my 3 years at Cardtronics our company acquired two
          other ATM company's and worked to integrate their systems and staff
          with ours. As part of this company effort I took it upon myself to
          author a new team training manual as our old training material was
          very outdated. During this effort I worked with my manager to improve
          team policy and procedure. As I began to see improvements in the way
          our team operated I couldn't help but think that we could be more
          effective as a team if we had software tools specifically designed for
          our use. This is when I began to study HTML and JavaScript and built a
          few applications using SharePoint as a platform. One Application I
          built was a searchable contacts page that our team could go to and
          quickly find phone numbers for employees or third party partners. This
          is when I first learned to love coding.
          <br />
          <br />
          &emsp;&emsp; Though I learned a lot through self study I knew I needed
          to accelerate my learning if I wanted to work as a web developer. I
          began to research coding bootcamps and discovered DevMountain in
          Dallas. After a lot of thought and consideration (and saving up money)
          I enrolled at DevMountain and broke the news to my boss that I would
          be leaving Cardtronics to take the next step in my career.
          <br />
          <br />
          <div style={{ borderBottom: "dashed thin" }} />
          <br />
          <img
            src="https://s3.amazonaws.com/devmountain/www/img/dm_white_logo.png"
            style={{ width: "260px", height: "57px" }}
          />
          <br />
          <br />
          <a href="https://devmountain.com">DevMountain</a> was the most
          intellectually challenging thing I have ever done. I could not imagine
          learning more within a 3 month period as I did at DevMountain. During
          the course we focused on React, Redux, Express, Node, SQL and advance
          JavaScript. After just a few weeks in the program I was building full
          stack applications, working with 3rd party API's, and not sleeping
          very often. I am really proud to be a DevMountain Alumni and would
          recommend the program to anyone who wants to accelerate their learning
          in web development.
        </p>
      </div>
    );
  }
}

export default Story;
