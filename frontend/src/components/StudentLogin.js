import React, { Component } from 'react';
import axios from 'axios';
import '../styles/AdminLog.css';


class StudentLogin extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: {
        StudentID:'',
        Password: ''
      },
      msg: {
        studentidError: '',
        passwordError: ''
      },
      errorMessage: null
   };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(element){
    var formData = this.state.data;
        formData[element.target.name] = element.target.value;
        this.setState({
          data : formData
        });
  }

  handleSubmit(event) {
    event.preventDefault();
    let _this = this;
    console.log(this.state.studentid);
    console.log(this.state.password);
    axios.post("http://localhost:8080/student/login", {
      StudentID: this.state.data.StudentID,
      Password: this.state.data.Password
    }).then(function (response) {
      _this.setState({
        msg: {
          studentidError: '',
          passwordError:''
        }

      })
      if(response.data.status === 'error') {
        _this.setState({errorMessage: response.data.message})
      } else {
        _this.props.history.push(
          { pathname: '/student/dashboard',
            state: {student: response.data}
          }) //react router will sent user to this link
      }
    }).catch(function (error) {
      console.log(error);
      if(error.response){
        let mainErrors = error.response.data.errors,
        msg = {
          studentidError: mainErrors.StudentID ? mainErrors.StudentID.msg : '',
          passwordError: mainErrors.Password ? mainErrors.Password.msg : ''
        };
        this.setState({
          msg: msg
        });
      }
    }.bind(this));

  }

  render() {
    return (
      <div className="admin-log-main">
        <h1>Student Login</h1>
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label htmlFor="inputEmailId">StudentID</label>
                  <input type="text" name="StudentID" value={this.state.data.StudentID} onChange={this.handleChange} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Student ID" />
                  <span className="text-danger"> {this.state.msg.studentidError}</span>
              </div>
              <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input type="password" name="Password" value={this.state.data.Password} onChange={this.handleChange} className="form-control" id="exampleInputPassword2" placeholder="Password" />
                  <span className="text-danger"> {this.state.msg.passwordError}</span>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <p className="text-danger">{this.state.errorMessage}</p>
          </form>
          <br />
          <br />

      </div>
    )
  }
}

export default StudentLogin;
