import React, { Component } from 'react';
import axios from 'axios';
import '../styles/AdminLog.css';

axios.defaults.withCredentials = true;

class AdminLog extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                email:'',
                password:''
            },
            err:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(element){
        var formData = this.state.data;
            formData[element.target.name] = element.target.value;
            this.setState({
                data:formData
            })
    }
    handleSubmit(event){
        event.preventDefault();
        let _this = this;
        axios("http://localhost:8080/api/admin/login", {
            method: 'post',
            withCredentials: true,
            data: {
                email: this.state.data.email,
                password: this.state.data.password
            },

        })
            .then(res => {
                window.location.href = '/admin/dashboard'
            })
            .catch(error => {
                console.log(error);
                if(error.response.data.message){
                    this.setState({
                        error: error.response.data.message
                    })
                }
            })
    }
    render() {
        return (
            <div className="admin-log-main">
                <h1>Admin Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail2">Email address</label>
                        <input type="email" name="email" value={this.state.data.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Password</label>
                        <input type="password" name="password" value={this.state.data.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword2" placeholder="Password" />
                    </div>
                    <p className="text-danger">{this.state.error}</p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br />
                <br />

            </div>
        );
    }
}

export default AdminLog;
