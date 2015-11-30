import AltInstance from 'lib/AltInstance';
import LoginActions from 'actions/Login';
import CategoryRequests from 'lib/api/CategoryRequests';

class CategoryActions {
  getCategories() {
    CategoryRequests.getCategories().then(function(data) {
      this.dispatch(data.categories);
    }.bind(this), function(xhr, status, error) {
      if (xhr.status === 401) {
        LoginActions.logout();
      }
    }.bind(this));
  }
}

export default AltInstance.createActions(CategoryActions);
