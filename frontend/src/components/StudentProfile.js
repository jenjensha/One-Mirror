import React from 'react';
import axios from 'axios';
import '../styles/StudentProfile.css';
import StudentLinks from './StudentLinks';

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
                studentInfo: 'No student'
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
      console.log(this.state.studentInfo);
      console.log(this.state.studentInfo.FirstName);
      var DOBdate = new Date(this.state.studentInfo.DateOfBirth);
      var DOBdateFormat = DOBdate.toISOString().substring(0, 10);
    //  console.log(DOBdateFormat);
    return(
        <div className="container StudentProfile-container">
            <h2> Student Profile </h2>
            <a className="btn btn-danger" onClick={this.handleBadgesClick}>Badges Earned</a>
                    <div className="StudentProfile-MainContainer">
                        <div className="StudentProfile-leftContainer">
                          <img src={`http://localhost:8080/uploads/${this.state.studentInfo.profilePic}`} className="img-rounded img-responsive" />
                        </div>

                        <div className="StudentProfile-rightContainer">
                            <h3> {this.state.studentInfo.FirstName} {this.state.studentInfo.LastName} </h3>
                            <ul className="StudentProfile-leftList">
                            <table>
                            <thead></thead>
                            <tbody>
                              <tr>
                                <td className="StudentProfile-firstCol">  <li> Date of Birth : </li></td>
                                <td className="StudentProfile-secCol"> <li> {DOBdateFormat} </li> </td>
                               </tr>

                               <tr>
                                  <td><li> Email: </li> </td>
                                  <td> <li> {this.state.studentInfo.Email} </li></td>
                               </tr>
                               <tr>
                                  <td><li> Status: </li> </td>
                                  <td> <li> {this.state.studentInfo.Status} </li></td>
                               </tr>
                               <tr>
                                  <td><li> Story of You: </li> </td>
                                  <td>  <li> <a href= {this.state.studentInfo.Video}> {this.state.studentInfo.Video} </a> </li></td>
                               </tr>
                               </tbody>
                            </table>
                            </ul>
                            <p> {this.state.studentInfo.ShortDescription}</p>
                        </div>
                    </div>
            <StudentLinks obj={this.state.studentInfo} />
        </div>
    )
  }
}


export default StudentProfile;
