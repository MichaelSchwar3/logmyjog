import React from 'react';
// import CommentForm from './comment_form_container';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: "",
      run_id: this.props.workout.id,
      author_id: this.props.user.currentUserId
    }
  }

  update(field){
    return e=>{
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(){
    this.props.createComment(this.state)
  }

  render () {
    return (
      <div id="comments-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.body} onChange={this.update('body')}/>
          <input type="submit" value="POST"/>
        </form>
      </div>
    );
  }
}

export default CommentIndex;
