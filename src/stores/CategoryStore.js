import { List }         from 'immutable';
import AltInstance      from 'lib/AltInstance';
import CategoryActions  from 'actions/Category';

class CategoryStore {
  constructor() {
    let { getCategories } = CategoryActions;

    this.bindListeners({
      categories: getCategories
    });

    this.categories = List();
  }

  categories(data) {
    var list = List();
    data.forEach(function(el) {
      list = list.push(el);
    });

    this.setState({categories: list});
  }
}

export default AltInstance.createStore(CategoryStore);
