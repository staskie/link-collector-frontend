import AltInstance from 'lib/AltInstance';
import LoginActions from 'actions/Login';
import LinkRequests from 'lib/api/LinkRequests';

class LinkActions {
  getLinks() {
    LinkRequests.getLinks().then(function(data) {
      this.dispatch(data.links);
    }.bind(this), function(xhr, status, error) {
      if (xhr.status === 401) {
        LoginActions.logout();
      }
    });
  }

  getLinksByCategory(categoryId) {
    LinkRequests.getLinksByCategory(categoryId).then(function(data) {
      this.dispatch(data.category_links);
    }.bind(this), function(xhr, status, error) {
      if (xhr.status === 401) {
        LoginActions.logout();
      }
    });
  }

  addLink(linkData) {
    LinkRequests.addLink(linkData).then(function(data) {
      this.dispatch(data);
    }.bind(this), function(xhr, status, error) {
      if (xhr.status === 401) {
        LoginActions.logout();
      }
    });
  }

  removeLink(id) {
    LinkRequests.removeLink(id).then(function(data) {
      this.dispatch(data);
    }.bind(this), function(xhr, status, error) {
      if (xhr.status === 401) {
        LoginActions.logout();
      }
    });
  }
}

export default AltInstance.createActions(LinkActions);
