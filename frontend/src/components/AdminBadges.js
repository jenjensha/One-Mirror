import React, { Component } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';

class AdminBadges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      success: null,
      badge: {
        Badge1: false,
        Badge2: false,
        Badge3: false,
        Badge4: false,
        Badge5: false,
        Badge6: false,
        
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let _this = this;
    axios.get(`http://localhost:8080/student/${this.props.match.params.StudentID}/badges`)
      .then(function (response) {
        if (response.data === 'not_found') {
          _this.setState({ loading: false })
        } else {
          _this.setState({ loading: false, badge: response.data })
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleChange(event) {
    let newBadge = this.state.badge;
    newBadge[event.target.name] = event.target.checked
    this.setState({ badge: newBadge })
  }

  handleSubmit(event) {
    let _this = this;
    event.preventDefault();
    axios.post(`http://localhost:8080/student/${this.props.match.params.StudentID}/badges/update`, this.state.badge)
    .then(function(response){
      if (response.data === 'success') {
        _this.setState({success: 'Student badges saved'})
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  render() {
    console.log(this.state.badge)
    if (this.state.loading) {
      return <p>Loading...</p>
    } else if (this.state.error) {
      return <p>Oops something went wrong</p>
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          {this.state.success && <p>{this.state.success}</p>}
          <div>
            <div className="form-check">
              <input onChange={this.handleChange} name="Badge1" checked={this.state.Badge1} className="form-check-input" type="checkbox" defaultValue id="Badge1" />
              <label className="form-check-label" htmlFor="Badge1">Badge1</label>
            </div>
            <div className="form-check">
              <input onChange={this.handleChange} name="Badge2" checked={this.state.Badge2} className="form-check-input" type="checkbox" defaultValue id="Badge2" />
              <label className="form-check-label" htmlFor="Badge2">Badge2</label>
            </div>
            <div className="form-check">
              <input onChange={this.handleChange} name="Badge3" checked={this.state.Badge3} className="form-check-input" type="checkbox" defaultValue id="Badge3" />
              <label className="form-check-label" htmlFor="Badge3">Badge3</label>
            </div>
            <div className="form-check">
              <input onChange={this.handleChange} name="Badge4" checked={this.state.Badge4} className="form-check-input" type="checkbox" defaultValue id="Badge4" />
              <label className="form-check-label" htmlFor="Badge4">Badge4</label>
            </div>
            <div className="form-check">
              <input onChange={this.handleChange} name="Badge5" checked={this.state.Badge5} className="form-check-input" type="checkbox" defaultValue id="Badge5" />
              <label className="form-check-label" htmlFor="Badge5">Badge5</label>
            </div>
            <div className="form-check">
              <input onChange={this.handleChange} name="Badge6" checked={this.state.Badge6} className="form-check-input" type="checkbox" defaultValue id="Badge6" />
              <label className="form-check-label" htmlFor="Badge6">Badge6</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Save Badges</button>
        </form>
      )
    }
  }
}
export default AdminBadges;
