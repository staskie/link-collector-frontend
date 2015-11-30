import LinkActions from 'actions/Link';
import AltInstance from 'lib/AltInstance';
import { List }    from 'immutable';

class LinksStore {
  constructor() {
    let { getLinks, getLinksByCategory, addLink, removeLink } = LinkActions;

    this.bindListeners({
      links: getLinks,
      linksByCategory: getLinksByCategory,
      add: addLink,
      remove: removeLink,
    });

    this.linksByCategory = this.linksByCategory.bind(this);

    this.links = List();
  }

  links(data) {
    this.setState({links: this.jsArrayToList(data)});
  }

  linksByCategory(data) {
    this.setState({links: this.jsArrayToList(data)});
  }

  add(data) {
    var list = this.links.push(data);
    this.setState({links: list});
  }

  remove(data) {
    var list = this.links.filter(function(el) {
      return el.id !== data.id;
    });

    this.setState({links: list});
  }

  jsArrayToList(array) {
    var list = List();
    array.forEach(function(el) {
      list = list.push(el);
    });

    return list;
  }
}

export default AltInstance.createStore(LinksStore);
