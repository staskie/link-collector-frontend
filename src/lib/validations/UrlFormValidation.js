class UrlFormValidation {
  isValid(form) {
    var errors = {},
        findings = {};

    if (form.url === '' || form.url === undefined) {
      errors.url = 'URL cannot be blank';
    }

    if (form.category_name === '' || form.category_name === undefined) {
      errors.category_name = 'Category cannot be blank';
    }

    if (form.name === '' || form.name === undefined) {
      errors.name = 'Link name cannot be blank';
    }

    if (Object.keys(errors).length !== 0) {
      findings = { status: false, errors: errors };
    } else {
      findings = { status: true, errors: null };
    }

    return findings;
  }
}

export default new UrlFormValidation();
