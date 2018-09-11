import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: ""
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
        <form onSubmit={this.handleSubmit}>
          <label id="fname">
            <input type="text" value={this.state.fname} onChange={this.update('fname')} placeholder="First Name"/>
          </label>
          <label id="lname">
            <input type="text" value={this.state.fname} onChange={this.update('lname')} placeholder="Last Name"/>
          </label>
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

export default withRouter(SignupForm);
