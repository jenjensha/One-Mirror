import React, { Component } from 'react';
import axios from 'axios';
class EditStudentDetails extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state={
        data:{
            firstName:'',
            lastName:'',
            //password:'',
            dateOfBirth:'',
            email:'',
            shortDescription:'',
            status:'',
            ID:'',
            photo:''

        },
        error:{
            firstName:'',
            lastName:'',
            dateOfBirth:'',
            email:'',
            shortDescription:'',
            status:'',
            ID:'',
            photo:''
        },
        success:'',
        loading: true,
      }
    this.handleUpdate=this.handleUpdate.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }


handleUpdate(event){
    event.preventdefault();
    let _this = this;
    axios.post(`http://localhost:8080/api/${this.props.match.params.StudentID}/update`,{
      data:this.state.data})
        .then(res =>{
            if(res.data.errors){
                let mainErr = res.data.errors;
                let errMsg = {
                    firstName: mainErr.firstName ? mainErr.firstName.msg : '',
                    lastName: mainErr.lastName ? mainErr.lastName.msg : '',
                    //password: mainErr.password ? mainErr.password.msg : '',
                    dateOfBirth: mainErr.dateOfBirth ? mainErr.dateOfBirth.msg : '',
                    email: mainErr.email ? mainErr.email.msg : '',
                    shortDescription: mainErr.shortDescription ? mainErr.shortDescription.msg : '',
                    status: mainErr.status ? mainErr.status.msg : '',
                    //ID: mainErr.ID ? mainErr.ID.msg : '',
                    photo: mainErr.photo ? mainErr.photo.msg : ''
                };
                _this.setState({
                    error: errMsg
                });
            }else{
                _this.setState({

                    success:'Student details modified successfully'
                })
            }
        })
        .catch(error => console.log(error))

}
handleChange(element){
    var formData = this.state.data;
        formData[element.target.name] = element.target.value;
    this.setState({
        data: formData
    })
}
componentDidMount(){
  let _this=this; 
    axios.get(`http://localhost:8080/api/${this.props.match.params.StudentID}/getedititem`)
    .then(function(response){
      console.log(response.data);
    let _this = this;
    let newData = this.state.data;
      
    newData.firstName= response.data.FirstName;
    newData.lastName = response.data.LastName; 
    newData.dateOfBirth= response.data.DateOfBirth;
    newData.email = response.data.Email;
    newData.shortDescription = response.data.ShortDescription;
    newData.status = response.data.Status;
    newData.ID = response.data.StudentID;
    newData.photo = response.data.profilePic;
    
    // <= something like this, be careful of the diffetence between capitals and spelling
                    // anyway, copy it from the response.data
                   
      _this.setState({
          data: newData 
      })
  })
  .catch(function(error){
    console.log(error);
  })
}
render(){
    
  return(
    <div className="editStudentDetails">
    <h3>Edit your message</h3>
    <form onSubmit={this.handleUpdate}>
      <div className="left-side">
          <div className="form-group">
              <label htmlFor="exampleInputFirstName">First Name</label>
              <input type="text" name="firstName" value={this.state.data.firstName} onChange={this.handleChange} className="form-control" id="exampleInputFirstName" placeholder="First Name" />
          </div>
          <p className="text-danger">{this.state.error.firstName}</p>
          <div className="form-group">
              <label htmlFor="exampleInputLastName">Last Name</label>
              <input type="text" name="lastName" value={this.state.data.lastName} onChange={this.handleChange} className="form-control" id="exampleInputLastName" placeholder="Last Name" />
          </div>
          <p className="text-danger">{this.state.error.lastName}</p>
          <div className="form-group">
              <label htmlFor="exampleInputDateOfBirth">Date of Birth</label>
              <input type="date" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange} className="form-control" id="exampleInputDateOfBirth"/>
          </div>
          <p className="text-danger">{this.state.error.dateOfBirth}</p>
          <div className="form-group">
              <label htmlFor="exampleInputEmail">Student Email</label>
              <input type="email" name="email" value={this.state.data.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail" placeholder="Student Email" />
          </div>
          <p className="text-danger">{this.state.error.email}</p>
          <div className="form-group">
              <label htmlFor="exampleInputShortDescription">Short Description</label>
              <input type="text" name="shortDescription" value={this.state.data.shortDescription} onChange={this.handleChange} className="form-control" id="exampleInputShortDescription" placeholder="Description" />
          </div>
          <p></p>
          <div className="form-group">
              <label htmlFor="exampleInputStatus">Status</label>
              <input type="text" name="status" value={this.state.data.status} onChange={this.handleChange} className="form-control" id="exampleInputStatus" placeholder="Status" />
          </div>
          <p className="text-danger">{this.state.error.status}</p>
      </div>
      <div className="right-side">
          <div className="form-group">
              <label htmlFor="exampleInputPhoto">Profile Photo</label>
              <input type="file" name="photo" value={this.state.data.photo} accept="image/*" onChange={this.handleChange} className="form-control" id="exampleInputPhoto" placeholder="Photo"/>
          </div>
          <p className="text-danger">{this.state.error.photo}</p>
          <div className="form-group">
              <label htmlFor="exampleInputID">ID</label>
              <input type="text" name="ID" value={this.state.data.ID} onChange={this.handleChange} className="form-control" id="exampleInputID" placeholder="StudentID random number" />
          </div>

      </div>
      <p className="text-success">{this.state.success}</p>
      <button type="submit" className="btn btn-primary submit">Update</button>
  </form>
</div>
)
}
}

export default EditStudentDetails;
