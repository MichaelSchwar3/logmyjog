import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.props.errors.session = [];
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
        [field]: e.currentTarget.value
      })
    );
  }
  renderErrors() {
    if (this.props.errors.session) {
      return(
        <ul>
          {this.props.errors.session.map((error, idx) => {
            return <li key={`error-${idx}`}>
              {error}
            </li>;
          })}
        </ul>
      );
    }
  }
  render() {
    return(
      <div id='div-form'>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} id="signup-form">
          <label id="email">
            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="E-mail"/>
          </label>
          <label id="password">
            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password"/>
          </label>
          <label id="submit">
            <input type="submit" value={this.props.formType}/>
          </label>
        </form>
        {this.props.navLink}<br/>
      </div>
    );
  }
}

export default withRouter(SessionForm);
