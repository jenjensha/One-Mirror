import React, { Component } from 'react';
import axios from 'axios';
import '../styles/home.css';


class HomePage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      studId : '',
      errorMsg: null,
      msg:{
        studIderr: '',
      }
    }


    this.handleAdminLogin = this.handleAdminLogin.bind(this);
    this.handleStudentLogin = this.handleStudentLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let _this = this;

    axios.post('http://localhost:8080/student/search',{
        studId: this.state.studId
    })
    .then(function(response){
      _this.setState({
          msg:{
            studIderr: ''
          }
        })
      if(response.data.status === 'error'){
          _this.setState({errorMsg: response.data.message})
        }
        else{
           console.log(response.data);
          _this.props.history.push({
            pathname: '/studentInfo',
            state: { detail: response.data }
          });
        }
    })
    .catch(function(error){
      console.log(error);
      if(error.response){
        let mainErrors = error.response.data.errors,
        msg = {
            studIderr: mainErrors.studId ? mainErrors.studId.msg : ''
      };
      this.setState({
        msg:msg
      });
    }
  }.bind(this));
  }

  handleAdminLogin(){

    window.location.href = '/admin';

  }

  handleStudentLogin(){
    window.location.href = '/student/login';
  }

  render(){
    //console.log(this.state.studId);
    return(
        <div className="container">
          <ul className="headerList">
              <li> <a className="btn btn-danger" onClick={this.handleAdminLogin}>Admin Login</a> </li>
              <li> <a className="btn btn-danger" onClick={this.handleStudentLogin}>Student Login</a> </li>
          </ul>
          <div className="main-container">
            <h1 id="welcome"> Welcome to the Student Portal </h1> <br />

            <form onSubmit={this.handleSubmit}>
                 <div className="form-group">
                   <input onChange={this.handleInputChange} value={this.state.studId} type="text" className="form-control" id="LoginStudId"
                      name="studId" aria-describedby="emailHelp" placeholder="Enter student id" />
                      <span className="text-danger"> {this.state.msg.studIderr} </span>
                 </div><br />

                 <div className="form-group">
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                  </div>
                  <span className="text-danger"> {this.state.errorMsg} </span>

            </form>
          </div>
        </div>
    )
  }
}

export default HomePage;
