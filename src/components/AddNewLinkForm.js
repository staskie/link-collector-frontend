import React              from 'react/addons';
import LinkActions        from 'actions/Link';
import UrlFormValidation  from 'lib/validations/UrlFormValidation';

class AddNewLinkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };

    this.submit                   = this.submit.bind(this);
    this.handleUrlChange          = this.handleUrlChange.bind(this);
    this.handleNameChange         = this.handleNameChange.bind(this);
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
    this.validate                 = this.validate.bind(this);
    this.clearForm                = this.clearForm.bind(this);
  }

  handleCategoryNameChange(event) {
    this.setState({category_name: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleUrlChange(event) {
    this.setState({url: event.target.value});
  }

  submit(event) {
    event.preventDefault();
    
    if (this.validate()) {
      LinkActions.addLink(this.state);
      this.clearForm();
    }
  }

  clearForm() {
    this.setState({
      url: null, 
      name: null,
      category_name: null, errors: {}
    });
  }

  validate() {
    var stateCopy = Object.assign({}, this.state),
        finding   = UrlFormValidation.isValid(stateCopy);

    this.setState({errors: finding.errors});
    return finding.status;
  }

  render() {
    return(
    <div id='add-new-link-form' className="panel panel-default">
      <div className="panel-heading">Add a new link</div>
        <div className="panel-body">
          <form className='form-inline' onSubmit = {this.submit }>
            <div className='form-group'>
              <input
                key="linkName"
                type="text"
                name="name"
                placeholder="Link name"
                value={this.state.name}
                onChange={this.handleNameChange}
                className='form-control link-name'
              />
              <p className='validation-msg'>{this.state.errors.name}</p>
            </div>
            <div className='form-group'>
              <input
                key="linkUrl"
                type="text"
                name="url"
                placeholder="URL"
                value={this.state.url}
                onChange={this.handleUrlChange}
                className='form-control link-url'
                />
              <p className='validation-msg'>{ this.state.errors.url }</p>
            </div>
            <div className='form-group'>
              <input
                key="linkCategoryName"
                type="text"
                name="category_name"
                placeholder="Category"
                value={this.state.category_name}
                onChange={this.handleCategoryNameChange}
                className='form-control link-category-name'
              />
              <p className='validation-msg'>{ this.state.errors.category_name }</p>
            </div>
            <button
              type='submit'
              key='newLinkFormSubmit'
              className='btn btn-primary'>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewLinkForm;
