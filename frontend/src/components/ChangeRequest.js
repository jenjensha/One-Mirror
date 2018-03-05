import React, { Component } from 'react';
import axios from 'axios';

class ChangeRequest extends Components {
  constructor(props){
    super(props)

    this.state = {
      data: {
        title: '',
        message: ''
      },
      student: this.props.location.state.detail
    }

    //bind

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
      studentid: this.state.student.StudentID
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <input onChange={this.handleInputChange} type="text" name="title" class="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <input onChange={this.handleInputChange}  type="text" name="message" class="form-control" id="inputmessage" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export defaults ChangeRequest;
