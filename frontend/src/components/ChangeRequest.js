import React, { Component } from 'react';
import axios from 'axios';
import '../styles/ChangeRequest.css';
import Header from './Header';
import Footer from './Footer';

class ChangeRequest extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: {
        title: '',
        Text: ''
      },
      dataMsg: {
        title: '',
        Text: ''
      },
      successMsg: null,
      errorMessage: null,
      student: this.props.location.state.student
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);

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
      title: this.state.data.title,
      Text: this.state.data.Text,
      FirstName: this.state.student.FirstName,
      LastName: this.state.student.LastName,
      StudentID: this.state.student.StudentID
    }).then(function (response) {

      _this.setState({
        dataMsg: {
          title: '',
          Text: ''
        },
        successMsg: 'Request send successfully'
      })
      if(response.data.status === 'error') {
        _this.setState({errorMessage: response.data.message})
      } else {
        _this.props.history.push(
          { pathname: '/student/Dashboard',
            state: {student: this.state.student}
        })
      }
    }).catch(function (error) {
      if(error.response){
        let mainErrors = error.response.data.errors,
        dataMsg = {
          title: mainErrors.title ? mainErrors.title.msg : '',
          Text: mainErrors.Text ? mainErrors.Text.msg : ''
        };
      }
    }.bind(this));
  }

  handleBackClick(){

    this.props.history.push(
      { pathname: '/student/Dashboard',
        state: {student : this.state.student}
    })
  }

  render() {
    return (
    <div>
      <Header />
      <a className="btn btn-primary changeReqBackBtn" onClick={this.handleBackClick}>Back</a>
      <h3 className="changeReqHeader"> Change Request </h3>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group changeReqForm">
          <input className="form-control changereqtitle" onChange={this.handleInputChange} value={this.state.data.title} type="text" name="title" id="inputemail" aria-describedby="emailHelp" placeholder="Title"/>
          <span className="text-danger">{this.state.dataMsg.title}</span>
        </div>
        <div className="form-group">
          <textarea className="form-control changeReqMessage" onChange={this.handleInputChange} value={this.state.data.Text} type="text" name="Text" id="inputmessage" aria-describedby="emailHelp" placeholder="Message"/>
          <span className="text-danger">{this.state.dataMsg.Text}</span>
        </div>
        <button type="submit" className="btn btn-primary changeReqBtn">Send Request</button>
      </form>
      <span className="text-success">{this.state.successMsg}</span>
      <Footer />
    </div>
    )
  }
}

export default ChangeRequest;
