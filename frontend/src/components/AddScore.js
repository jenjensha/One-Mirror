import React, { Component } from 'react';
import axios from 'axios';
class AddScore extends Component {

  constructor(props){
    super(props);
      this.state = {
        challenge: '',
        score:''
      }

  this.selectKey=this.selectKey.bind(this);
  this.handleInputChange=this.handleInputChange.bind(this);
}

  selectKey(event) {
   this.setState({challenge:event.target.value})
 }
 handleInputChange(event){
  this.setState({
    [event.target.name]:event.target.value
  })
}

render(){
  return (
    <div>
    <h2>Jen Jensha</h2>
      <div className="challengTable">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Challenge</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Front End Challenge</td>
              <td>10</td>
            </tr>
            <tr>

              <td>Algorithm Challenge</td>
              <td>10</td>
            </tr>
            <tr>

              <td>Backend Challenge</td>
              <td>10</td>
            </tr>

          </tbody>
        </table>
      </div>
      <select name="challenge" onChange={this.selectKey}>
            <option key={1} value='frontend'>Front-end Challenge</option>
            <option key={2} value='algorithm'>Algorithm Challenge</option>
            <option key={3} value='lamp'>LAMP Challenge</option>
            <option key={4} value='mern'>MERN Challenge</option>
    </select>
    <p>{this.state.challenge}</p>
    <div className="form-group">
    <label htmlFor="inputScore">Score</label>
    <input onChange={this.handleInputChange} name="score" type="text" value={this.state.score} className="form-control" id="inputScore" aria-describedby="Score" placeholder="Score"/>

  </div>

  </div>
)
}
}
export default AddScore;
