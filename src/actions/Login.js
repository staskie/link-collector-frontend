import AltInstance from 'lib/AltInstance';
import LoginRequests from 'lib/api/LoginRequests';

class LoginActions {
  authenticate(email, password) {
    LoginRequests.authenticate(email, password).then(
    function(data) {
      data.success = true;
      this.dispatch(data);
    }.bind(this),
    function(xhr, status, error) {
      this.dispatch({
        success: false,
        message: error
      });
    }.bind(this));
  }

  logout() {
    this.dispatch();
  }
}

export default AltInstance.createActions(LoginActions);
