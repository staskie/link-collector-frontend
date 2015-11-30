import React        from 'react/addons';
import LoginActions from 'actions/Login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.submit               = this.submit.bind(this);
    this.handleLoginChange    = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLoginChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  submit(event) {
    event.preventDefault();

    LoginActions.authenticate(this.state.email, this.state.password);
  }

  render() {
    var errorComponent = null;

    if (this.props.errorMessage) {
      errorComponent = <div className='login-error-message'>Wrong email or password</div>;
    } else {
      errorComponent = '';
    }

    return(
      <div>
        <form className='form-signin' onSubmit={this.submit}>
          {errorComponent}
          <h2 className='form-signin-heading'>Sign In</h2>
          <input className='form-control'
            key="loginEmail"
            type="text" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleLoginChange}
          />
          <input className='form-control'
            key="loginPassword"
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handlePasswordChange}
          />
          <button className='btn btn-lg btn-primary btn-block'
            type="submit"
            key="formSubmit"
            bgStyle="primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
