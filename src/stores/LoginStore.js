import Actions from 'actions/Login';
import AltInstance from 'lib/AltInstance';

class LoginStore {
  constructor() {
    let { authenticate, logout } = Actions;

    this.initializeAuthentication();

    this.bindListeners({
      authenticate: authenticate,
      logout: logout
    });
  }

  authenticate(data) {
    if (data.success === true) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('uuid', data.uuid);
      localStorage.setItem('email', data.email);

      this.setState({loggedIn: true, error: null});
    } else {
      this.setState({loggedIn: false, error: data.message});
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('uuid');
    localStorage.removeItem('email');

    this.setState({loggedIn: false});
  }

  initializeAuthentication() {
    if (localStorage.getItem('token') && localStorage.getItem('uuid')) {
      this.loggedIn = true; 
    } else {
      this.loggedIn = false;
    }
  }

}

export default AltInstance.createStore(LoginStore);
