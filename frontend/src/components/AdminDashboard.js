import React, { Component } from 'react';
import axios from 'axios';
class AdminDashboard extends Component {
  handleAddscore()
  {
    window.location.href='/admin/addscore';
  }
  handleEdit()
  {
    window.location.href='/admin/editdetails';
  }
  handleViewProfile(){
    window.location.href='/admin/viewprofile';
  }
render(){
  return (
  <div>
    <h1>Admin Dashboard</h1>
    <nav className="nav">
        <a className="nav-link disabled" href="#">List Of Students</a>
        <a className="nav-link active"  href="/admin/student/register">Registration</a>
      </nav>
    <div className="table-responsive-md">
    <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" colSpan={3}>Name</th>
            <th scope="col" colSpan={3}>Actions</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">12453</th>
            <td colSpan={3}>Jac Thon</td>
            <td><button type="button"  className="btn btn-primary" onClick={this.handleEdit}>Edit</button></td>
            <td><button type="button"  className="btn btn-info" onClick={this.handleViewProfile}>view Profile</button></td>
            <td><button type="button" className="btn btn-success" onClick={this.handleAddscore}>Add Score</button></td>

          </tr>
          <tr>
            <th scope="row">22354</th>
            <td colSpan={3}>Jacob Thornton</td>
            <td><button type="button" className="btn btn-primary" onClick={this.handleEdit}>Edit</button></td>
            <td><button type="button" className="btn btn-info">view Profile</button></td>
            <td><button type="button" className="btn btn-success" onClick={this.handleAddscore}>Add Score</button></td>
          </tr>
          <tr>
            <th scope="row">32653</th>
            <td colSpan={3}>Larry the Bird</td>
            <td><button type="button" className="btn btn-primary" onClick={this.handleEdit}>Edit</button></td>
            <td><button type="button" className="btn btn-info">view Profile</button></td>
            <td><button type="button" className="btn btn-success" onClick={this.handleAddscore}>Add Score</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )

}
}
export default AdminDashboard;
