import React, { Component } from 'react';
import axios from 'axios';


class AdminChangeReqList extends Component {
    constructor(props){
        console.log(props);
        super(props);
        this.state={
            requests:null,
            error:'',
        }
        axios.post("http://localhost:8080/admin/logedin")
            .then(res => {
                this.setState({
                    error:''
                })
            })
            .catch(error =>{
                this.setState({
                    error:'Please Login'
                })
            })
    }
    handleEditProfile(req){
        let _this = this;
        // props.history.push({
        //     pathname:'/admin/editprofile/'+req.studentID,
        //     state:req.text
        // })
    }
    handleDelete(id){
        let _this = this;
        //confirm("Press a button!");
        //alert("Sure you want tp delete this request");
        axios.delete("http://localhost:8080/admin/deletechangerequest/"+id)
            .then(res => {
                window.location.href="/admin/studen/changerequest"
            })
            .catch(error => console.log(error))
    }
    componentDidMount(){
        axios.get("http://localhost:8080/admin/changerequests")
        .then(res => {
            this.setState({
                requests: res.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        // if(this.state.error === 'Please Login'){return <h1 className="text-danger">{this.state.error}</h1>}
        return (
            <div>
                <h1>Links Change Request</h1>
                {this.state.requests
                    ?
                    <div>
                    <div className="table-responsive-md">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={1}>Student ID</th>
                                <th scope="col" colSpan={1}>Name</th>
                                <th scope="col" colSpan={1}>Request message</th>
                                <th scope="col" colSpan={5}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                {this.state.requests.map(function(req){  
                    return(
                        <tr>
                            <th scope="row">{req.studentID}</th>
                            <td>{req.firstName}{req.lastName}</td>
                            <td>{req.text}</td>
                            <td colSpan={2}><button onClick={this.handleEditProfile(req)}  className="btn btn-success" >Edit profile</button></td>
                            <td colSpan={2}><button onClick={this.handleDelete(req._id)}  className="btn btn-danger" >Delete</button></td>
                        </tr>
                    )
                }.bind(this))}
                        </tbody>
                    </table>
                </div>
                </div>
                :
                <h1 className="text-danger"> There is no Requests </h1>
                }
                <h1>Links Change Request</h1>
                <div className="table-responsive-md">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={1}>Student ID</th>
                                <th scope="col" colSpan={1}>Name</th>
                                <th scope="col" colSpan={1}>Request message</th>
                                <th scope="col" colSpan={5}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">12453</th>
                                <td>Jac Thon</td>
                                <td>my name is wrong</td>
                                <td colSpan={2}><button onClick={this.handleEditProfile}  className="btn btn-success" >Edit profile</button></td>
                                <td colSpan={2}><button onClick={this.handleDelete}  className="btn btn-danger" >Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default AdminChangeReqList;