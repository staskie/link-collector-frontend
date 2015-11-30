import React        from 'react/addons';
import LinkActions  from 'actions/Link';

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.url;
    this.removeLink = this.removeLink.bind(this);
  }

  removeLink() {
    LinkActions.removeLink(this.state.id);
  }

  render() {
    var link = this.state;

    return(
      <li className='list-group-item'>
        <div className='col-sm-2 link-category-column'>
          {this.state.category_name}
        </div>
        <div className='col-sm-8'>
          <h4 className='list-group-item-heading'>
            {this.state.name}
          </h4>
          <a href={this.state.url} target='_blank'
            className='list-group-item-text link-url'>
            {this.state.url}
          </a>
        </div>
          <a href='#' onClick={this.removeLink}
            className='btn btn-danger push-right'>
            Remove
          </a>
      </li>
    );
  }
}

export default Link;
