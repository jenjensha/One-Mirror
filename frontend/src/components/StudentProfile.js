import React from 'react';
import axios from 'axios';
import '../styles/StudentProfile.css';

class StudentProfile extends React.Component{
  constructor(props){
    super(props);

    if(props.location.state !== undefined){
            this.state = {
                studentInfo: this.props.location.state.detail
            }
        }
        else{
            this.state ={
                studentInfo: []
            }
        }
      this.handleBadgesClick = this.handleBadgesClick.bind(this);
  }

  // componentDidMount(){
  //   let _this = this;
  //
  //   axios.get('http://localhost:8080/student/profileinfo')
  //   .then(function(response){
  //       _this.setState({
  //           studentInfo: response.data
  //       })
  //   })
  //   .catch(function(error){
  //       console.log(error);
  //   })
  // }
  handleBadgesClick(){
    this.props.history.push({
      pathname: '/student/badges',
      state: { detail: this.state.studentInfo }
    });
  }

  render(){
    if(this.state.StudentID === 'No student')
    {return <p>Please enter a valid StudentID</p>}
    return(
        <div className="container StudentProfile-container">
            <h2> Student Profile </h2>
            <a className="btn btn-danger" onClick={this.handleBadgesClick}>Badges Earned</a>
            {this.state.studentInfo &&
                this.state.studentInfo.map(function(item){
                  return(
                    <div key={item._id}>
                        <div className="StudentProfile-leftContainer">
                            <img src={item.profilePic} className="img-rounded img-responsive" />
                        </div>

                        <div className="StudentProfile-rightContainer">
                            <h4> {item.FirstName} {item.SecondName} </h4>
                            <ul className="StudentProfile-leftList">
                              <li> Date of Birth : </li>
                              <li> Email: </li>
                              <li> Status: </li>
                              <li> Story of You: </li>
                            </ul>
                            <ul className="StudentProfile-rightList">
                              <li> {item.DateOfBirth} </li>
                              <li> {item.Email} </li>
                              <li> {item.Status} </li>
                              <li> {item.Video} </li>
                            </ul>
                            <p> {item.ShortDescription}</p>
                        </div>
                    </div>
                  )
                })
            }
        </div>
    )
  }
}


export default StudentProfile;
