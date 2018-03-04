import React, { Component } from 'react';
import axios from 'axios';
import '../styles/AdminLog.css';


class StudentLogin extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: {
        studentid:'',
        password: ''
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
    axios.post("http://localhost:8080/student/login", {
      studentid: this.state.studentid,
      password: this.state.password
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
          { pathname: '/studentDashboard',
            state: {unicorn: response.data}
          }) //react router will sent user to this link
      }
    }).catch(function (error) {
      console.log(error);
      if(error.response){
        let mainErrors = error.response.data.errors,
        msg = {
          studentidError: mainErrors.studentid ? mainErrors.studentid.msg : '',
          passwordError: mainErrors.password ? mainErrors.password.msg : ''
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
                  <label htmlFor="exampleInputEmail2">StudentID</label>
                  <input type="text" name="studentid" value={this.state.data.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Student ID" />
                  <span className="text-danger"> {this.state.msg.studentidError}</span>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword2">Password</label>
                  <input type="password" name="password" value={this.state.data.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword2" placeholder="Password" />
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
