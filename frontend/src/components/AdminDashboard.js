import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class AdminDashboard extends Component {
  constructor(props){
    super(props)

    this.state={

      students: null,
      loading: true,


    }
  }
  handleAddscore()
  {
    window.location.href='/admin/addscore';
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
let _this = this;
  console.log(this.state.students);
  return (
  <div>
    <h1>Admin Dashboard</h1>
    <nav className="nav">
        <a className="nav-link disabled" href="#">List Of Students</a>
        <a className="nav-link active"  href="#">Registration</a>
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

            {this.state.students && this.state.students.map(function(student) {
              return (
                <tr key={student._id}>
                  <th scope="row">{student.StudentID}</th>
                  <td colSpan={3}>{student.FirstName} {student.LastName}</td>        
                  <td><button type="button" className="btn btn-primary" >Edit</button></td>
                  
                  <td><Link className="btn btn-info" to={`/students/profile/${student.StudentId}`}>View profile</Link></td>
                  <td><Link className="btn btn-info" to={`/admin/${student.StudentID}/addscore`}>Add Scores</Link></td>
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
