import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class AdminDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {

      students: null,
      loading: true

    }
    this.handleProfileClick=this.handleProfileClick.bind(this);
  }
  handleAddscore() {
    window.location.href = '/admin/addscore';
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

  componentDidMount() {
    let _this = this;
    axios.get("http://localhost:8080/api/listofstudents")
      .then((response) => {
        if (response.data.error) {
          _this.setState({ loading: false })
        } else {
          _this.setState({ students: response.data, loading: false })
        }
      })
      .catch((error) => {
        console.log(error)
      })


  }

  render() {
    let _this = this;
    console.log(this.state.students);
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <nav className="nav">
          <a className="nav-link disabled" href="#">List Of Students</a>
          <a className="nav-link active" href="/admin/student/register">Registration</a>
        </nav>
        <div className="table-responsive-md">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" colSpan={2}>#</th>
                <th scope="col" colSpan={3}>Name</th>
                <th scope="col" colSpan={3}>Actions</th>

              </tr>
            </thead>
            <tbody>

              {this.state.students && this.state.students.map(function (student) {
                return (
                  <tr key={student._id}>
                    <th scope="row">{student.StudentID}</th>
                    <td>
                      {student.profilePic &&
                        <img src={`http://localhost:8080/uploads/${student.profilePic}`} width="40" height="40" />}
                    </td>
                    <td colSpan={3}>{student.FirstName} {student.LastName}</td>

                    <td><Link className="btn btn-primary" to={`/admin/${student.StudentID}/editdetails`}>Edit</Link></td>
                    <td><Link className="btn btn-info" to={`/students/profile/${student.StudentID}`}>View profile</Link></td>
                    <td><Link className="btn btn-success" to={`/admin/${student.StudentID}/addscore`}>Add Scores</Link></td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </div>
  </div>
  )

  }
}
export default AdminDashboard;
