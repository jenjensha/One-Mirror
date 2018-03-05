import React, { Component } from 'react';
import axios from 'axios';
class AdminDashboard extends Component {
<<<<<<< HEAD
  constructor(props){
    super(props);

    this.state={

      students: null,
      loading: true

    }
    this.handleProfileClick=this.handleProfileClick.bind(this);
  }
=======
>>>>>>> b15090280d90d16932ca9950bad7b60093fd9cdf
  handleAddscore()
  {
    window.location.href='/admin/addscore';
  }
  handleEdit()
  {
    window.location.href='/admin/editdetails';

  }
  handleProfileClick(){
    this.props.history.push({
      pathname: '/student/profile',
      state: { detail: this.state.students }
    });
  }

  componentDidMount(){
    let _this = this;
    axios.get("http://localhost:8080/api/listofstudents")
    .then((response) => {
      if(response.data.error) {
        _this.setState({loading: false})
      } else {
        _this.setState({students: response.data , loading: false })
      }
    })
      .catch((error) =>{
        console.log(error)
      })


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

            {this.state.students && this.state.students.map(function(student) {
              return (
                <tr key={student._id}>
                  <th scope="row">{student.StudentID}</th>
                  <td colSpan={3}>{student.FirstName} {student.LastName}</td>
                  <td><button type="button" className="btn btn-primary" >Edit</button></td>

                  <td><button className="btn btn-primary" onClick={this.handleProfileClick}>View Profile</button></td>
                  <td><Link className="btn btn-info" to={`/admin/${student.StudentID}/addscore`}>Add Scores</Link></td>
                </tr>
              )
            }.bind(this))}
        </tbody>
      </table>
    </div>
  </div>
  )

}
}
export default AdminDashboard;
