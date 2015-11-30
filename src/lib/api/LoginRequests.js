import Settings from 'lib/Settings';

class LoginRequests {
  authenticate(email, password) {
    return $.ajax({
      url: Settings.server() + '/api/v1/sessions',
      method: 'POST',
      type: 'json',
      data: { 
        email: email,
        password: password
      }
    });
  }
}

export default new LoginRequests();
