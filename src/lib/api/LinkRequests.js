import Settings from 'lib/Settings';

class LinkRequests {
  getLinks() {
    return $.ajax({
      url: Settings.server() + '/api/v1/links.json',
      method: 'GET',
      type: 'json',
      headers: {
        'X-API-TOKEN': localStorage.getItem('token'),
        'X-API-UUID': localStorage.getItem('uuid')
      }
    });
  }

  getLinksByCategory(categoryId) {
    return $.ajax({
      url: Settings.server() + "/api/v1/categories/" + categoryId + "/links.json",
      method: 'GET',
      type: 'json',
      headers: {
        'X-API-TOKEN': localStorage.getItem('token'),
        'X-API-UUID': localStorage.getItem('uuid')
      }
    });
  }

  addLink(data) {
    return $.ajax({
      url: 'http://localhost:3000/api/v1/links',
      method: 'POST',
      type: 'json',
      data: {
        'link[url]': data.url,
        'link[name]': data.name,
        'link[category_name]': data.category_name
      },
      headers: {
        'X-API-TOKEN': localStorage.getItem('token'),
        'X-API-UUID': localStorage.getItem('uuid')
      }
    });
  }

  removeLink(id) {
    return $.ajax({
      url: 'http://localhost:3000/api/v1/links/' + id,
      method: 'DELETE',
      type: 'json',
      headers: {
        'X-API-TOKEN': localStorage.getItem('token'),
        'X-API-UUID': localStorage.getItem('uuid')
      }
    });
  }
}

export default new LinkRequests();
