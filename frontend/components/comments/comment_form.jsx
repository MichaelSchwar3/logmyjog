import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: "",
      run_id: 0,
      author_id: 0
    }
  }

  update(field){
    return e=>{
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.body !== ""){
      const com = {
        body: this.state.body,
        run_id: this.props.workout.id,
        author_id: this.props.user,
      }
      this.props.createComment(com)
      this.setState({
        body: ""
      })
    }
  }

  render () {
    return (
      <div id="comments-form">
        <form onSubmit={this.handleSubmit}>
          <span id="comments-form-icon">&#128100;</span>
          <input id="comment-input" type="text" value={this.state.body} onChange={this.update('body')}/>
          <input id="comment-submit" type="submit" value="POST"/>
        </form>
      </div>
    );
  }
}

export default CommentForm;
