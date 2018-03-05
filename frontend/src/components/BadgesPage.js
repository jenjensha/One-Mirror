import React, { Component } from 'react';
import axios from 'axios';
import '../styles/BadgesPage.css';

class BadgesPage extends React.Component{
  constructor(props){
    super(props);
    if(props.location.state !== undefined){
            this.state = {
                StudentID: this.props.location.state.detail.StudentID,
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
      studId: this.state.StudentID
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
                {this.state.badgesInfo &&
                    this.state.badgesInfo.map(function(item){
                      return(
                        <div className="BadgesPage-main" key={item._id}>
                                <ul className="BadgesPage-List">
                                  <li> {item.BadgeName} {item.Status}</li>
                                </ul>
                        </div>
                      )
                    })
                }
            </div>
    )
  }
}

export default BadgesPage;
