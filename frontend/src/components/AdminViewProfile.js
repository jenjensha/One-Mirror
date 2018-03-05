import React, { Component } from 'react';
import axios from 'axios';
class AdminViewProfile extends Component {
  constructor(props){
    super(props);
    console.log(props);

}
render(){
return(
  <p> The Student Id is {this.props.match.params.StudentID} </p>
)
}
}
export default AdminViewProfile;
