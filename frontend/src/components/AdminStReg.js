import React, { Component } from 'react';
import axios from 'axios';
import '../styles/AdminStReg.css'

class AdminStReg extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                firstName:'',
                lastName:'',
                password:'',
                dateOfBirth:'',
                email:'',
                shortDescription:'',
                status:'',
                video:'',
                ID:'',
                linkedinLink:'',
                githubLink:'',
                hackerRankLink:'',
                CVlink:''
            },
            error:{
                firstName:'',
                lastName:'',
                password:'',
                dateOfBirth:'',
                email:'',
                shortDescription:'',
                status:'',
                ID:'',
                photo:'',
            },
            success: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(element){
        var formData = this.state.data;
            formData[element.target.name] = element.target.value;
        this.setState({
            data: formData
        })
    }
    handleSubmit(event){
        event.preventDefault();
        let _this = this;
        axios.post("http://localhost:8080/api/student/register", this.state.data)
            .then(res =>{
                if(res.data.errors){
                    let mainErr = res.data.errors;
                    let errMsg = {
                        firstName: mainErr.firstName ? mainErr.firstName.msg : '',
                        lastName: mainErr.lastName ? mainErr.lastName.msg : '',
                        password: mainErr.password ? mainErr.password.msg : '',
                        dateOfBirth: mainErr.dateOfBirth ? mainErr.dateOfBirth.msg : '',
                        email: mainErr.email ? mainErr.email.msg : '',
                        shortDescription: mainErr.shortDescription ? mainErr.shortDescription.msg : '',
                        status: mainErr.status ? mainErr.status.msg : '',
                        ID: mainErr.ID ? mainErr.ID.msg : '',
                        photo: mainErr.photo ? mainErr.photo.msg : ''
                    };
                    _this.setState({
                        error: errMsg
                    });
                }else{
                    _this.setState({
                        data:{
                            firstName:'',
                            lastName:'',
                            password:'',
                            dateOfBirth:'',
                            email:'',
                            shortDescription:'',
                            status:'',
                            video:'',
                            ID:'',
                            linkedinLink:'',
                            githubLink:'',
                            hackerRankLink:'',
                            CVlink:''
                        },
                        error:{
                            firstName:'',
                            lastName:'',
                            password:'',
                            dateOfBirth:'',
                            email:'',
                            shortDescription:'',
                            status:'',
                            ID:'',
                            photo:'',
                        },
                        success:'Student Registerd successfully'
                    })
                }
            })
            .catch(error => console.log(error))

    }
    render() {
        return (
            <div className="register-std">
                <h1>Student Register</h1>


                {this.state.success && <p>{this.state.success}</p>}

                <form onSubmit={this.handleSubmit} className="register-form">
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
                            <label htmlFor="exampleInputPassword">Password</label>
                            <input type="text" name="password" value={this.state.data.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <p className="text-danger">{this.state.error.password}</p>

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
                            <textarea type="text" name="shortDescription" value={this.state.data.shortDescription} onChange={this.handleChange} className="form-control" id="exampleInputShortDescription" placeholder="Description"></textarea>   
                        </div>
                        <p className="text-danger">{this.state.error.shortDescription}</p>

                        <div className="form-group">
                            <label htmlFor="exampleInputStatus">Status</label>
                            <input type="text" name="status" value={this.state.data.status} onChange={this.handleChange} className="form-control" id="exampleInputStatus" placeholder="Status" />
                        </div>
                        <p className="text-danger">{this.state.error.status}</p>
                    </div>
                    <div className="right-side">
                        <div className="form-group">
                            <label htmlFor="exampleInputPhoto">Profile Photo</label>
                            <input type="file" name="photo" accept="image/*" onChange={this.handleChange} className="form-control" id="exampleInputPhoto" placeholder="Photo"/>
                        </div>
                        <p className="text-danger">{this.state.error.photo}</p>
                        <div className="form-group">
                            <label htmlFor="exampleInputVideo">Video Link</label>
                            <input type="text" name="video" value={this.state.video} onChange={this.handleChange} className="form-control" id="exampleInputVideo" placeholder="Personal Video Link" />
                        </div>
                        <p className="text-danger">{this.state.error.video}</p>
                        <div className="form-group">
                            <label htmlFor="exampleInputID">ID</label>
                            <input type="text" name="ID" value={this.state.data.ID} onChange={this.handleChange} className="form-control" id="exampleInputID" placeholder="StudentID random number" />
                        </div>
                        <p className="text-danger">{this.state.error.ID}</p>
                        <div className="form-group">
                            <label htmlFor="exampleInputLindeinLink">Linkedin Link</label>
                            <input type="text" name="linkedinLink" value={this.state.data.linkedinLink} onChange={this.handleChange} className="form-control" id="exampleInputLindeinLink" placeholder="Student Linkedin (optinal)" />
                        </div>
                        <p></p>
                        <div className="form-group">
                            <label htmlFor="exampleInputGithubLink">Github Link</label>
                            <input type="text" name="githubLink" value={this.state.data.githubLink} onChange={this.handleChange} className="form-control" id="exampleInputGithubLink" placeholder="Github Link (optinal)" />
                        </div>
                        <p></p>
                        <div className="form-group">
                            <label htmlFor="exampleInputhackerRankLink">hackerRank Link</label>
                            <input type="text" name="hackerRankLink" value={this.state.data.hackerRankLink} onChange={this.handleChange} className="form-control" id="exampleInputhackerRankLink" placeholder="Hacker Rank Link (optinal)" />
                        </div>
                        <p></p>
                        <div className="form-group">
                            <label htmlFor="exampleInputCVlink">CV Link</label>
                            <input type="text" name="CVlink" value={this.state.data.CVlink} onChange={this.handleChange} className="form-control" id="exampleInputCVlink" placeholder="CV Link (optinal)" />
                        </div>
                        <p></p>
                    </div>
                    <p className="text-success">{this.state.success}</p>
                    <button type="submit" className="btn btn-primary subbut">Submit</button>
                </form>
                <br />
                <br />

            </div>
        );
    }
}

export default AdminStReg;
