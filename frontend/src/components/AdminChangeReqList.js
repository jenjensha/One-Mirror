import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AdminChangeReqList extends Component {
    constructor(props){
        console.log(props);
        super(props);
        this.state={
            requests:null,

        }
        this.handleDeleteRequestClick=this.handleDeleteRequestClick.bind(this);

    }

    handleDeleteRequestClick(id){
        let _this = this;
        axios.delete("http://localhost:8080/api/deletechangerequests/"+id)
            .then(res => {
                window.location.href="/admin/student/changerequests"
            })
            .catch(error => console.log(error))
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/listofrequests")
        .then(res => {
            this.setState({
                requests: res.data
            })
        })
        .catch(error => console.log(error))
    }

          render() {
            let _this = this;
            console.log(this.state.requests);
            return (
              <div>

                <h1>Change Requests</h1>

                <div className="table-responsive-md">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col" colSpan={1}>#</th>
                        <th scope="col" colSpan={2}>Student Name</th>
                        <th scope="col" colSpan={1}>Text</th>
                        <th scope="col" colSpan={1}>Title</th>
                        <th scope="col" colSpan={1}>Status</th>
                        <th scope="col" colSpan={2}>Actions</th>

                      </tr>
                    </thead>
                    <tbody>

                      {_this.state.requests && _this.state.requests.map(function (request) {
                        console.log(request);
                        return (
                          <tr key={request._id}>
                            <th scope="row">{request.StudentID}</th>


                            <td scope="col" colSpan={2}>{request.FirstName} {request.LastName}</td>
                            <td>{request.Text}</td>
                            <td>{request.title}</td>
                            <td>{request.changeStatus}</td>
                            <td ><Link className="btn btn-primary" to={`/admin/${request.StudentID}/editdetails`}>Approve</Link>
                            <a className="btn btn-danger" onClick={this.handleDeleteRequestClick(request._id)}>Delete</a></td>



                          </tr>
                        )
                      }.bind(_this))}
                </tbody>
              </table>
            </div>
          </div>
          )

          }
        }
export default AdminChangeReqList;
