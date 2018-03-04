import React, { Component } from 'react';
import axios from 'axios';
import '../styles/BadgesPage.css';

class BadgesPage extends React.Component{
  constructor(props){
    super(props);
    if(props.location.state !== undefined){
            this.state = {
                StudentID: this.props.location.state.detail.StudentID
            }
        }
        else{
            this.state ={
                StudentID: []
            }
        }
  }

  render(){
    if(this.state.StudentID === 'No student')
    {return <p>Please enter a valid StudentID</p>}
    return(
            <h4> Badges Earned </h4>
    )
  }
}

export default BadgesPage;
