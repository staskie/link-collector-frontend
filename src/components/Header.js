import React        from 'react/addons';
import LoginActions from 'actions/Login';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.email = localStorage.getItem('email');
  }

  render() {
    return(
      <div id='header'>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <a href='#' 
                className='btn btn-default navbar-btn push-right' 
                onClick={LoginActions.logout}>
                Logout
              </a>
              <span>You logged in as {this.state.email}</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
