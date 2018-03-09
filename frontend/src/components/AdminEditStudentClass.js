import React, { Component } from 'react'
import axios from 'axios'
import AdminNav from './AdminNav'

class AdminEditStudentClass extends Component {
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

    axios.post(`http://localhost:8080/api/admin/student/class/${this.props.match.params.id}/update`, {
      name: _this.state.name
    })
      .then((response) => {
        console.log(response.data);

        if (response.data === 'success') {
          this.setState({
            success: 'Student Class has been editted'
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

  componentDidMount() {
    let _this = this;
    axios.get(`http://localhost:8080/api/admin/student/class/${this.props.match.params.id}`)
      .then(function (response) {
        _this.setState({ name: response.data.name })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <AdminNav />
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.success && <p>{this.state.success}</p>}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">

            <input name="name" type="text" className="form-control" id="studentClass" aria-describedby="emailHelp" placeholder="Enter Student Class" value={this.state.name}
              onChange={this.handleChange} />

          </div>

          <button type="submit" className="btn btn-primary">Update</button>
        </form>


      </div>
    )
  }
}

export default AdminEditStudentClass
