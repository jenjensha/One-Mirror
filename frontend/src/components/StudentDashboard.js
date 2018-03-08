import React, { Component } from 'react';
import axios from 'axios';
import ChangeRequest from './ChangeRequest';
import '../styles/studentDashboard.css';
import {Animated} from "react-animated-css";

class StudentDashboard extends Component {
  constructor(props){
    super(props);
    console.log('before0');
    console.log(this.props.location.state.student);

    if(props.location.state !== undefined) {
    this.state = {
      student: this.props.location.state.student,
      currentStudentName: this.props.location.state.student.FirstName
    }

  }



    this.handleChangeRequest = this.handleChangeRequest.bind(this);
    this.handleModifyLinks = this.handleModifyLinks.bind(this);
  }



  handleChangeRequest(){

    this.props.history.push({
      pathname: '/student/changereq',
      state: {student: this.state.student}
    });

  }

  handleModifyLinks(){

    this.props.history.push({
      pathname: '/student/modifylinks',
      state: {student: this.state.student}
    })
  }

  render() {
    console.log(this.state.student);
    return (
      <div className="container">
        <ul className="btn-List pull-right">
            <li> <a className="btn btn-danger" onClick={this.handleChangeRequest}>Change Request</a> </li>
            <li> <a className="btn btn-danger" onClick={this.handleModifyLinks}>Modify Links</a> </li>
        </ul>
        <div className="main-container">
          <h1 id="welcome"> Welcome to the student dashboard </h1> <br />

        </div>

        <ul className="dashboard-link-list">
              <div>
                <li>
                <div id="imgBounce">
                <a href={this.state.student.LinkedIn_link}>
                  <img
                    className="dashboard-link-icon"
                    src="/linkedin-logo.png"
                    alt='Icon for LinkedIn'/>
                    </a>
                    <a href={this.state.student.LinkedIn_link}> LinkedIn </a>
                  </div>
                </li>
                <li>
                  <div id="imgBounce">
                  <a href={this.state.student.Github_link}>
                  <img
                    className="dashboard-link-icon"
                    src="/Github-logo.png"
                    alt="Icon for Github"/>
                    </a>
                    <a href={this.state.student.Github_link}> Github </a>
                    </div>
                </li>
                <li>
                  <div id="imgBounce">
                  <a href={this.state.student.hackerRank_link}>
                  <img
                    className="dashboard-link-icon"
                    src="/HackerRank-logo.png"
                    alt="Icon for HackerRank"/>
                    </a>
                    <a href={this.state.student.hackerRank_link}> HackerRank</a>
                    </div>
                </li>
                <li>
                  <div id="imgBounce">
                  <a href={this.state.student.CV_link}>
                  <img
                    className="dashboard-link-icon"
                    src="/CV-logo.png"
                    alt="Icon for CV"/>
                    </a>
                    <a href={this.state.student.CV_link}> CV </a>
                    </div>
                </li>
              </div>
        </ul>
      </div>
    )
  }
}

export default StudentDashboard;
