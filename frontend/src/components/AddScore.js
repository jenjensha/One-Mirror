import React, { Component } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';


class AddScore extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      challenge: 'frontend',
      score: '',
      //addbadge:'',
      enablebadge:'',
      error: null,
      success: null,
      loading: true,
      scorecard: null

    }

    this.selectKey = this.selectKey.bind(this);
    //this.selectAddBadge = this.selectAddBadge.bind(this);
    this.selectEnableBadge = this.selectEnableBadge.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleAddBadgeSubmit=this.handleAddBadgeSubmit.bind(this);
    this.handleEnableBadgeSubmit=this.handleEnableBadgeSubmit.bind(this);
    //this.handleEnableBadgeClick=this.handleEnableBadgeClick.bind(this);

  }

  selectKey(event) {
    this.setState({ challenge: event.target.value })
  }
  // selectAddBadge(event){
  //   let _this = this;
  //   _this.setState({addbadge:event.target.value})
  // }
  selectEnableBadge(event){
    let _this = this;
    _this.setState({enablebadge:event.target.value})
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    let _this = this;
    
    axios.post(`http://localhost:8080/api/admin/${this.props.match.params.StudentID}/addscores`, {
      challenge: _this.state.challenge,
      score: _this.state.score
    })
      .then(function (response) {
        if(response.data.errors) {
          _this.setState({ errors: response.data.errors })
        } else {
        _this.setState({
          score: "",
          errors: null
        })
        _this.getScoreCard();

       }
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  handleEnableBadgeSubmit(event) {
    event.preventDefault();
    let _this = this;
    console.log(this.props);
    axios.post(`http://localhost:8080/api/admin/${this.props.match.params.StudentID}/enablebadges`, {
      enablebadge:_this.state.enablebadge
    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      })
  }
  // handleAddBadgeSubmit(event) {
  //   event.preventDefault();
  //   let _this = this;
  //   console.log(this.props);
  //   axios.post(`http://localhost:8080/api/admin/${this.props.match.params.StudentID}/addbadges`, {
  //     addbadge:_this.state.addbadge
  //   })
  //     .then(function (response) {
  //
  //       console.log(response);
  //
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }


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
  // getBadgeCard()
  //
  // {
  //   let _this = this;
  //   axios.get(`http://localhost:8080/api/admin/${this.props.match.params.StudentID}/badges`)
  //     .then(function (response) {
  //
  //       console.log(response);
  //
  //       if (response.data.error) {
  //
  //         _this.setState({ loading: false })
  //       } else {
  //         _this.setState({ loading: false, badgecard: response.data })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  componentDidMount() {

   this.getScoreCard();

  }

  render() {
    console.log(this.state);
    return (
      <div>

        <AdminNav />
        <div className="container">
        {this.state.scorecard && this.state.scorecard.student &&
        <h2>{this.state.scorecard.student.FirstName} {this.state.scorecard.student.LastName}</h2>}
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

        {/* {this.state.badgecard &&

        <div className="badgeTable">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Badge</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            }


                  {this.state.badgecard && this.state.badgecard.badges.map(function(badge){
                    return (

                    <tr key={badge._id}>
                      <td>{badge.BadgeName}</td>
                      <td>  <button type="submit" name="enableBadge"  className="btn btn-primary">Enable Badge</button></td>
              </tr>
                    )
              }).bind(this)}

            </tbody>
          </table>
        </div> */}


        <form onSubmit={this.handleSubmit}>
          <select name="challenge" onChange={this.selectKey} value={this.state.challenge}>
            <option key={1} value='frontend'>Front-end Challenge</option>
            <option key={2} value='algorithm'>Algorithm Challenge</option>
            <option key={3} value='lamp'>LAMP Challenge</option>
            <option key={4} value='mern'>MERN Challenge</option>
          </select>
          <p>{this.state.challenge}</p>
          <div className="form-group">
            <label htmlFor="inputScore">Score</label>
            <input onChange={this.handleInputChange} name="score" type="text" value={this.state.score} className="form-control" id="inputScore" aria-describedby="Score" placeholder="Score" />

            {this.state.errors && this.state.errors.score  && 
              <p>{this.state.errors.score.msg}</p>}
            
            
            <button type="submit" name="addScore" className="btn btn-primary mb-3 mt-3" >Add Score</button>
            
          </div>
        </form>
        {/* <form onSubmit={this.handleAddBadgeSubmit}>
          <select name="addbadge" onChange={this.selectAddBadge}>
            <option key={1} value='full-stackLAMP'>Full Stack Developer(LAMP)</option>
            <option key={2} value='full-satckMERN'>Full Stack Developer(MERN)</option>
            <option key={3} value='RestartOneGraduate'>Restart One Graduate</option>
          </select>
          <p>{this.state.addbadge}</p>
          <div className="form-group">
            <button type="submit" name="addBadge" className="btn btn-primary">Add Badge</button>
          </div>
        </form> */}

         {/* <form onSubmit={this.handleEnableBadgeSubmit}>
          <select name="enablebadge" onChange={this.selectEnableBadge}>
            <option key={1} value='Badge1'>Badge1</option>
            <option key={2} value='Badge2'>Badge2</option>
            <option key={3} value='Badge3'>Badge3</option>
            <option key={4} value='Badge4'>Badge4</option>
            <option key={5} value='Badge5'>Badge5</option>
            <option key={6} value='Badge6'>Badge6</option>
          </select>
          <p>{this.state.enablebadge}</p>
          <div className="form-group">
            <button type="submit" name="enableBadge" className="btn btn-primary">Enable Badge</button>
          </div>
        </form> */}
      </div>
      </div>
    )
  }
}
export default AddScore;
