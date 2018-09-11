import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
    return this.props.processForm(user);
  }

  update(field) {
    return e => (
      this.setState({
        [field]: e.target.value
      })
    );
  }
  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, idx) => {
  //         return <li key={`error-${idx}`}>
  //           {error}
  //         </li>;
  //       })}
  //     </ul>
  //   );
  // }
  render() {
    return(
      <div>
        <form onSubmit={()=>this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
          <input type="submit" value={this.props.formType}/>
        </form>
        {this.props.navLink}<br/>
      </div>
    );
  }
}

export default withRouter(SessionForm);
