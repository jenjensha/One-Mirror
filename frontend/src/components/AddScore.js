import React, { Component } from 'react';
import axios from 'axios';
class AddScore extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      challenge: '',
      score: '',
      badge:'',
      error: null,
      success: null,
      loading: true,
      scorecard: null,
    }

    this.selectKey = this.selectKey.bind(this);
    this.selectBadge = this.selectBadge.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBadgeSubmit=this.handleBadgeSubmit.bind(this);
  }

  selectKey(event) {
    this.setState({ challenge: event.target.value })
  }
  selectBadge(event){
    let _this = this;
    _this.setState({badge:event.target.value})
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    let _this = this;
    console.log(this.props);
    axios.post(`http://localhost:8080/api/admin/${this.props.match.params.StudentID}/addscores`, {
      challenge: _this.state.challenge,
      score: _this.state.score,
    })
      .then(function (response) {
        _this.setState({
          score: "",

        })
        _this.getScoreCard();

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  handleBadgeSubmit(event) {
    event.preventDefault();
    let _this = this;
    console.log(this.props);
    axios.post(`http://localhost:8080/api/admin/${this.props.match.params.StudentID}/addbadges`, {
      badge:_this.state.badge
    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getScoreCard(){
    let _this = this;
    axios.get(`http://localhost:8080/api/admin/${this.props.match.params.StudentID}/scores`)
      .then(function (response) {

        console.log(response);

        if (response.data.error) {

          _this.setState({ loading: false })
        } else {
          _this.setState({ loading: false, scorecard: response.data })
        }
      })
      .catch((error) => {
        console.log(error)
      })



  }

  componentDidMount() {

   this.getScoreCard();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.scorecard && this.state.scorecard.student &&
        <h2>{this.state.scorecard.student.FirstName}{this.state.scorecard.student.LastName}</h2>}
        <div className="challengTable">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Challenge</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>

                  {this.state.scorecard && this.state.scorecard.scores.map(function(score){
                    return (

                    <tr key={score._id}>
                      <td>{score.ChallengeName}</td>
                      <td>{score.Score}</td>
              </tr>
                    )
              })}

            </tbody>
          </table>
        </div>


        <form onSubmit={this.handleSubmit}>
          <select name="challenge" onChange={this.selectKey}>
            <option key={1} value='frontend'>Front-end Challenge</option>
            <option key={2} value='algorithm'>Algorithm Challenge</option>
            <option key={3} value='lamp'>LAMP Challenge</option>
            <option key={4} value='mern'>MERN Challenge</option>
          </select>
          <p>{this.state.challenge}</p>
          <div className="form-group">
            <label htmlFor="inputScore">Score</label>
            <input onChange={this.handleInputChange} name="score" type="text" value={this.state.score} className="form-control" id="inputScore" aria-describedby="Score" placeholder="Score" />
            <button type="submit" name="addScore" className="btn btn-primary" >Add Score</button>

          </div>
        </form>
        <form onSubmit={this.handleBadgeSubmit}>
          <select name="badge" onChange={this.selectBadge}>
            <option key={1} value='full-stackLAMP'>Full Stack Developer(LAMP)</option>
            <option key={2} value='full-satckMERN'>Full Stack Developer(MERN)</option>
            <option key={3} value='RestartOneGraduate'>Restart One Graduate</option>
          </select>
          <p>{this.state.badge}</p>
          <div className="form-group">
            <button type="submit" name="addBadge" className="btn btn-primary">Enable Badge</button>
          </div>
        </form>
      </div>
    )
  }
}
export default AddScore;
