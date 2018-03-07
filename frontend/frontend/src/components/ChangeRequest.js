import React, { Component } from 'react';
import axios from 'axios';
import '../styles/ChangeRequest.css';

class ChangeRequest extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: {
        title: '',
        message: ''
      },
      dataMsg: {
        title: '',
        message: ''
      },
      errorMessage: null,
      student: this.props.location.state.detail
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmt.bind(this);

  }
  handleInputChange(element){
    var formData = this.state.data;
        formData[element.target.name] = element.target.value;
        this.setState({
          data : formData
        });

  }

  handleSubmit(event){
    event.preventDefault();

    let _this = this;
    axios.post("http://localhost:8080/student/changereq", {
      title: this.state.title,
      message: this.state.title,
      firstname: this.state.student.FirstName,
      lastname: this.state.student.LastName,
      StudentID: this.state.student.StudentID
    }).then(function (response) {
      this.setState({
        dataMsg: {
          title: '',
          message: ''
        }
      })
      if(response.data.status === 'error') {
        _this.setState({errorMessage: response.data.message})
      } else {
        _this.props.history.push(
          { pathname: '/studentDashboard',
            state: {unicorn: this.state.student}
        })
      }
    }).catch(function (error) {
      if(error.message){
        let mainErrors = error.response.data.errors,
        dataMsg = {
          title: mainErrors.title ? mainErrors.title.dataMsg : '',
          message: mainErrors.message ? mainErrors.message.dataMsg : ''
        };
      }
    })
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <input onChange={this.handleInputChange} value={this.state.data.title} type="text" name="title" class="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <input onChange={this.handleInputChange} value={this.state.data.message} type="text" name="message" class="form-control" id="inputmessage" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    )
  }
}

export default ChangeRequest;
