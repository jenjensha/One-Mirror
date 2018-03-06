import React, { Component } from 'react';
import axios from 'axios';
import '../styles/BadgesPage.css';
import StudentLinks from './StudentLinks';

class BadgesPage extends React.Component{
  constructor(props){
    super(props);
    if(props.location.state !== undefined){
            this.state = {
                studentInfo: this.props.location.state.detail,
                // StudentID: this.props.location.state.detail.StudentID,
                badgesInfo: null
            }
        }
        else{
            this.state ={
                StudentID: []
            }
        }
  }

  componentDidMount(){
    let _this = this;

    axios.post('http://localhost:8080/student/badges',{
      studId: this.state.studentInfo.StudentID
    })
    .then(function(response){
        _this.setState({
            badgesInfo: response.data
        })
    })
    .catch(function(error){
        console.log(error);
    })
  }


  render(){
    // if(this.state.StudentID === 'No student')
    // {return <p>Please enter a valid StudentID</p>}
    return(
            <div className="container BadgesPage-container">
                <h4> Badges Earned </h4>
                        <div className="BadgesPage-main">
                                <ul className="BadgesPage-List">
                                  <li> {this.state.studentInfo.BadgeName} {this.state.studentInfo.Status}</li>
                                </ul>
                        </div>
                 <StudentLinks obj={this.state.studentInfo} />
            </div>
    )
  }
}

export default BadgesPage;
