import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class StudentClassList extends Component {

  constructor(props) {
    super(props);

    this.state = {


      errors: null,
      success: null,
      studentClasses: null,
      loading: true
    }
  }

  componentDidMount() {
    let _this = this;
    axios.get("http://localhost:8080/api/admin/student/class/list")
      .then((response) => {
        if (response.data.error) {
          _this.setState({ loading: false })
        } else {
          _this.setState({ studentClasses: response.data, loading: false })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    return (
      <div>
        <h1>Student Class</h1>

        <div className="table-responsive-md">
          <table className="table table-hover">
            <thead>
              <tr>
                
                <th scope="col" colSpan={3}>Student Class </th>
                <th scope="col" colSpan={3}>Actions</th>

              </tr>
            </thead>
            <tbody>

              {this.state.studentClasses && this.state.studentClasses.map(function (studentClass) {
                return (
                  <tr key={studentClass._id}>
                    <th scope="row">{studentClass.name}</th>
                    <td><Link className="btn btn-primary" to={`/admin/student/class/${studentClass._id}/edit`}>Edit</Link></td>
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

export default StudentClassList