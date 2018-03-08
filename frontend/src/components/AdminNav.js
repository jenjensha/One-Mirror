import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class AdminNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      admin: null

    }
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut() {
    let _this = this;
    axios.get('http://localhost:8080/api/admin/logout')
      .then(function (response) {
        _this.setState({ admin: null })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidMount() {


    let _this = this;

    axios.get('http://localhost:8080/api/current_admin')
      .then(function (response) {
        if (response.data.error) {
          _this.setState({ loading: false })
        } else {
          _this.setState({ admin: response.data, loading: false })
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {
    if (this.state.loading) {
      return <p>Loading your information, please be patient</p>
    } else if (!this.state.admin) {
      return <Redirect to="/admin" />
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark">

          <ul className="nav navbar-nav">

            <NavLink to="/admin/dashboard" className="nav-item nav-link">List of Students</NavLink>
            <NavLink to="/admin/student/register" className="nav-item nav-link">Registration</NavLink>
            <NavLink to="/admin/student/class" className="nav-item nav-link">Student Classes</NavLink>

            <NavLink to="/admin/student/class/add" className="nav-item nav-link">Add Classes</NavLink>
            <NavLink to="/admin/student/changerequests" className="nav-item nav-link">View Change Requests</NavLink>





          </ul>

          <ul className="nav navbar-nav ml-auto">

            <li className="nav-item">
              {this.state.admin && this.state.admin.firstName &&
                <span className="nav-link">Admin {this.state.admin.firstName}</span>}
            </li>

            <li className="nav-item">

              <span style={{ cursor: 'pointer' }} className="nav-link cursor-pointer" onClick={this.handleLogOut}>Logout</span>
            </li>

          </ul>
        </nav>

      )
    }
  }
}

export default AdminNav
