import React, { Component } from 'react'
import AdminNav from '../components/AdminNav';
import {Link} from 'react-router-dom';
import axios from'axios';

class AdminViewClassStudentList extends Component {
  constructor(props){
    super(props);

    this.state ={
      loading: true,
      success: null,
      error:  null,

      students : null,
    }
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  handleAddscore() {
    window.location.href = '/admin/addscore';
  }
  handleEdit() {
    window.location.href = '/admin/editdetails';
  }
  handleProfileClick() {
    this.props.history.push({
      pathname: '/student/profile',
      state: { detail: this.state.students }
    });
  }

  componentDidMount() {
    let _this = this;
    
    axios.get(`http://localhost:8080/api/admin/student/class/${this.props.match.params.id}/students`)
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
        <AdminNav />
        <h1>Admin Dashboard</h1>

        <div className="table-responsive-md">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" colSpan={1}>#</th>
                <th scope="col" colSpan={1}>StudentClass</th>
                <th scope="col" colSpan={1}>Picture</th>
                <th scope="col" colSpan={3}>Name</th>
                <th scope="col" colSpan={3}>Actions</th>

              </tr>
            </thead>
            <tbody>

              {this.state.students && this.state.students.map(function (student) {
                return (
                  <tr key={student._id}>
                    <th scope="row">{student.StudentID}</th>
                    <td>{student.StudentClass && student.StudentClass.name && student.StudentClass.name}</td>
                    <td>
                      {student.profilePic &&
                        <img src={`http://localhost:8080/uploads/${student.profilePic}`} width="40" height="40" />}
                    </td>
                    <td colSpan={3}>{student.FirstName} {student.LastName}</td>

                    <td><Link className="btn btn-primary" to={`/admin/${student.StudentID}/editdetails`}>Edit</Link></td>
                    <td><a className="btn btn-danger" onClick={this.handleProfileClick}>View Profile</a></td>
                    <td><Link className="btn btn-success" to={`/admin/${student.StudentID}/addscore`}>Add Scores</Link></td>
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

export default AdminViewClassStudentList;