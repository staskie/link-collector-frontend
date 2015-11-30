import Settings from 'lib/Settings';

class CategoryRequests {
  getCategories() {
    return $.ajax({
      url: Settings.server() + '/api/v1/categories',
      method: 'GET',
      type: 'json',
      headers: {
        'X-API-TOKEN': localStorage.getItem('token'),
        'X-API-UUID': localStorage.getItem('uuid')
      },
    });
  }
}

export default new CategoryRequests();
