import React, { Component } from 'react'
import axios from 'axios'
import AdminNav from './AdminNav';


class AdminAddStudentClass extends Component {
  constructor(props) {
    super(props);

    this.state = {

      loading: true,
      errors: null,
      success: null,

      name: '',

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let _this = this;

    axios.post('http://localhost:8080/api/admin/student/class/add', {
      name: _this.state.name
    })
      .then((response) => {
        console.log(response.data);

        if(response.data.errors) {
          _this.setState({ errors: response.data.errors})
        } 
        else {
          _this.setState({ errors: null, success: 'New class created!!' }) // no errors so set null
        }
      })
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <AdminNav />
        {this.state.success && <p>{this.state.success}</p>}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">

        

            <input name="name" type="text" className="form-control" id="studentClass" aria-describedby="emailHelp" placeholder="Enter Student Class" value={this.state.name}
              onChange={this.handleChange} />

            {this.state.errors && this.state.errors.name && <p>{this.state.errors.name.msg}</p>}
          </div>

          <button type="submit" className="btn btn-primary">Add Class</button>
        </form>


      </div>
    )
  }
}

export default AdminAddStudentClass