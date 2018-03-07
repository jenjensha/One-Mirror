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
                //StudentID: this.props.location.state.detail.StudentID,
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

    return(
            <div className="container BadgesPage-container">
                <h4> Badges Earned </h4>
                <div className="BadgesPage-mainBlock">

                        <div className="BadgesPage-main">
                                <ul className="BadgesPage-List">
                                  <li>
                                      {this.state.badgesInfo.Badge1Status === 0 ?
                                        <div className="disabled">
                                            <img src="/linkedin-logo.png" alt="Linkedin link" width="75" height="75" />
                                            <h5> Badge1 </h5>  {this.state.badgesInfo.Badge1Status}
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/Github-logo.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge1 </h5> {this.state.badgesInfo.Badge1Status}
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge2Status === 0 ?
                                        <div className="disabled">
                                            <img src="/linkedin-logo.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge2 </h5> {this.state.badgesInfo.Badge2Status}
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/Github-logo.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge2 </h5> {this.state.badgesInfo.Badge2Status}
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge3Status === 0 ?
                                        <div className="disabled">
                                            <img src="/linkedin-logo.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge3 </h5> {this.state.badgesInfo.Badge3Status}
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/Github-logo.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge3 </h5> {this.state.badgesInfo.Badge3Status}
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge4Status === 0 ?
                                        <div className="disabled">
                                            <img src="/linkedin-logo.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge4 </h5> {this.state.badgesInfo.Badge4Status}
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/Github-logo.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge4 </h5> {this.state.badgesInfo.Badge4Status}
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge5Status === 0 ?
                                        <div className="disabled">
                                            <img src="/linkedin-logo.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge2 </h5> {this.state.badgesInfo.Badge5Status}
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/Github-logo.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge2 </h5> {this.state.badgesInfo.Badge5Status}
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge6Status === 0 ?
                                        <div className="disabled">
                                            <img src="/linkedin-logo.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge6 </h5> {this.state.badgesInfo.Badge6Status}
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/Github-logo.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge6 </h5> {this.state.badgesInfo.Badge6Status}
                                      </div>
                                      }
                                  </li>

                                </ul>
                        </div>

            </div>
            <StudentLinks obj={this.state.studentInfo} />
            </div>
    )
  }
}

export default BadgesPage;
