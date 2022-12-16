import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import "./SignUpForm.css"

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step!
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="signup-form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="name-and-email">
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="NAME:" required />
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="EMAIL:" required />
            </div>
            <div className="password-and-confirm">
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="PASSWORD:" required />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} placeholder="CONFIRM PASSWORD:" required />
            </div>
            <br />
              <button className="signup-btn" type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}