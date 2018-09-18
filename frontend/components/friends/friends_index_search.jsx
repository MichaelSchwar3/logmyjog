import React from 'react';
import { Link } from 'react-router-dom';

class FriendIndexSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friender_id: "",
      friendee_id: "",
      accepted: false,
    }
    this.search =""
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
      this.props.action(this.props.userId, this.state)
  }
  handleSearch(){
    // TODO: 
  }
  render() {
    return(
      <div id="friends-search-container">
        <div id="friends-search-head">
          FIND LOGMYJOG FRIENDS BY FIRST NAME, LAST NAME, OR EMAIL:
        </div>
        <div id="friends-search-box">
          <input type="text" value={this.search}/>
          <button id="search" onCLick={this.handleSubmit}>Search</button>
        </div>
      </div>
    )
  }
}

export default FriendIndexSearch;
