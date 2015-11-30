import React              from 'react/addons';
import LinkActions	      from 'actions/Link';
import CategoryActions    from 'actions/Category';
import LinksStore         from 'stores/LinksStore';
import AddNewLinkForm     from 'components/AddNewLinkForm';
import Category           from 'components/Category';
import Link               from 'components/Link';
import Header             from 'components/Header';

class Links extends React.Component {
  constructor(props) {
    super(props);

    this.state        = LinksStore.getState();
    this.urlsChanged  = this.urlsChanged.bind(this);
  }

  componentDidMount()    { 
    LinksStore.listen(this.urlsChanged);
    LinkActions.getLinks();
  }

  componentWillUnmount() { 
    LinksStore.unlisten(this.urlsChanged);
  }

  urlsChanged(urlsList)  { 
    this.setState(urlsList); 
    CategoryActions.getCategories();
  }

  render() {
    var urls = this.state.links;

    return (
      <div>
        <Header />
        <Category />
        <div id='links' className='col-md-9 col-md-offset-3'>
          <h1>Organise Your Bookmarks</h1>
          <ul className='list-group'>
            {urls.map(url =>
              <Link key={url.id} url={url} />
             ).toJS()}
          </ul>
          <AddNewLinkForm />
        </div>
      </div>
    );
  }
}

export default Links;
