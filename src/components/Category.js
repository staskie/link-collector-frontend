import React            from 'react/addons';
import CategoryStore    from 'stores/CategoryStore';
import CategoryActions  from 'actions/Category';
import LinkActions      from 'actions/Link';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state                  = CategoryStore.getState();
    this.categoriesChanged      = this.categoriesChanged.bind(this);
    this.selectLinksForCategory = this.selectLinksForCategory.bind(this);
    this.allLinks               = this.allLinks.bind(this);
  }

  componentDidMount() { 
    CategoryStore.listen(this.categoriesChanged);
    CategoryActions.getCategories() ;
  }

  componentWillUnmount() {
    CategoryStore.unlisten(this.categoriesChanged);
  }

  categoriesChanged(list) {
    this.setState(list);
  }

  selectLinksForCategory(event) {
    event.stopPropagation();
    LinkActions.getLinksByCategory(event.target.dataset.categoryId);
  }

  allLinks(event) {
    event.stopPropagation();
    LinkActions.getLinks();
  }

  render() {
    var categories = this.state.categories;

    return(
      <div id='categories' className='col-md-3'>
        <h2>Categories</h2>
        <ul className="list-group">
          <li className='list-group-item'>
            <a href='#' onClick={this.allLinks}>All links</a>
          </li>
          {categories.map(category =>
            <li key={category.id} className='list-group-item'>
              <a href='#' onClick={this.selectLinksForCategory} data-category-id={category.id}>
                { category.name }
              </a>
            </li>
          ).toJS()}
        </ul>
      </div>
    );
  }
}

export default Category;
