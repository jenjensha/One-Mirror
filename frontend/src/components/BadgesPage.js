import React, { Component } from 'react';
import axios from 'axios';
import '../styles/BadgesPage.css';
import StudentLinks from './StudentLinks';
import Header from './Header';
import Footer from './Footer';


class BadgesPage extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    if(props.location.state !== undefined){
            this.state = {
                studentInfo: this.props.location.state.detail,
                badgesInfo: null
            }
        }

  this.handleProfileClick =  this.handleProfileClick.bind(this);
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

  handleProfileClick(){
    this.props.history.push({
      pathname: `/student/profile/${this.state.studentInfo.StudentID}`,
      state: { detail: this.props.location.state.detail }
    });
  }

  render(){
        console.log(this.state.badgesInfo);
    return(
          <div>
          <Header />
          <a className="btn btn-danger btn-lg BadgesPage-button" onClick={this.handleProfileClick}>Profile Page</a>

            <div className="container BadgesPage-container">
                <h2> Badges Earned </h2>
                <div className="BadgesPage-mainBlock">

                        <div className="BadgesPage-main">
                              {this.state.badgesInfo &&
                                <ul className="BadgesPage-List">
                                  <li>
                                      {this.state.badgesInfo.Badge1 === 0 ?
                                        <div className="disabled">
                                            <img src="/a-icon.png" alt="Linkedin link" width="75" height="75" />
                                            <h5> Badge1 </h5>
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/a-icon.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge1 </h5>
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge2 === 0 ?
                                        <div className="disabled">
                                            <img src="/b-icon.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge2 </h5>
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/b-icon.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge2 </h5>
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge3 === 0 ?
                                        <div className="disabled">
                                            <img src="/c-icon.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge3 </h5>
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/c-icon.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge3 </h5>
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge4 === 0 ?
                                        <div className="disabled">
                                            <img src="/d-icon.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge4 </h5>
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/d-icon.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge4 </h5>
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge5 === 0 ?
                                        <div className="disabled">
                                            <img src="/f-icon.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge2 </h5>
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/f-icon.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge2 </h5>
                                      </div>
                                      }
                                  </li>

                                  <li>
                                      {this.state.badgesInfo.Badge6 === 0 ?
                                        <div className="disabled">
                                            <img src="/g-icon.png" alt="Linkedin link" width="75" height="75" />
                                             <h5> Badge6 </h5>
                                        </div>
                                       :
                                       <div className="enabled">
                                             <img src="/g-icon.png" alt="Linkedin link" width="75" height="75" />
                                              <h5> Badge6 </h5>
                                      </div>
                                      }
                                  </li>

                                </ul>
                              }
                        </div>

            </div>
            <StudentLinks obj={this.state.studentInfo} />
            </div>
            <Footer />
          </div>
    )
  }
}

export default BadgesPage;
