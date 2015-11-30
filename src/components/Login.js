import React          from 'react/addons';
import LoginStore     from 'stores/LoginStore';
import LoginForm      from 'components/LoginForm';
import Links          from 'components/Links';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = LoginStore.getState();
    this.onLogin = this.onLogin.bind(this);
  }

  componentDidMount() { LoginStore.listen(this.onLogin); }
  componentWillUnmount() { LoginStore.unlisten(this.onLogin);  }

  onLogin(state) {
   this.setState(state);
  }
  
  render() {
    var viewToRender = null;

    if (!this.state.loggedIn) {
      viewToRender = <LoginForm errorMessage = { this.state.error } />;
    } else {
      viewToRender = <Links />;
    }

    return(
      <div>
        { viewToRender }
      </div>
    );
  }
}

export default Login;
