import React, { Component } from 'react'
import axios from 'axios'


class AdminAddStudentClass extends Component {
  constructor(props) {
    super(props);

    this.state = {

      loading: true,
      error: null,
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

        if (response.data === 'success') {
          this.setState({
            success: 'New class created!!'
          })
        } else {
          this.setState({
            error: 'something went wrong'
          })
        }
      })
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.success && <p>{this.state.success}</p>}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">

            <input name="name" type="text" className="form-control" id="studentClass" aria-describedby="emailHelp" placeholder="Enter Student Class" value={this.state.name}
              onChange={this.handleChange} />

          </div>

          <button type="submit" className="btn btn-primary">Add Class</button>
        </form>


      </div>
    )
  }
}

export default AdminAddStudentClass