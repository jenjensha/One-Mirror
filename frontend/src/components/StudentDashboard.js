import React, { Component } from 'react';
import axios from 'axios';
import ChangeRequest from './ChangeRequest';
import '../styles/studentDashboard.css';

class StudentDashboard extends Component {
  constructor(props){
    super(props);

    if(props.location.state !== undefined) {
    this.State = {
      student: this.props.location.state.unicorn,
      currentStudentName: this.props.location.state.unicorn.name

    }
  }



    this.handleChangeRequest = this.handleChangeRequest.bind(this);
  }



  handleChangeRequest(){

    this.props.history.push({
      pathname: '/student/changereq',
      state: {detail: this.state.student}
    });

  }

  handleModifyLinks(){

    window.location.href = '/student/modifylinks';
  }

  render() {
    return (
      <div className="container">
        <ul className="btn-List pull-right">
            <li> <a className="btn btn-danger" onClick={this.handleChangeRequest}>Change Request</a> </li>
            <li> <a className="btn btn-danger" onClick={this.handleModifyLinks}>Modify Links</a> </li>
        </ul>
        <div className="main-container">
          <h1 id="welcome"> Welcome to the student dashboard </h1> <br />

        </div>

        <ul className="link-list">
          {this.state.student ?
            this.state.student.map(student => {
              return (
              <div>
                <li>
                  <img
                    className="link-icon"
                    src=""
                    alt='Icon for LinkedIn' />
                    <a href={student.LinkedIn_link}> LinkedIn </a>
                </li>
                <p> {student.LinkedIn_link} </p>
                <p> {student.Github_link} </p>
                <p> {student.hackerRank_link} </p>
                <p> {student.CV_link} </p>
              </div>
            )
            })
            :
            <p> student links should be shown here </p>
          }
        </ul>
      </div>
    )
  }
}

export default StudentDashboard;
