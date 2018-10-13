import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component{
  // renderTitleField just returns some JSX, however we
  // still have to wire up the jsx to the field component
  // Field object contains some event handlers that we need to wire up to
  // the jsx we are returning
  // Must provide field object parameter
  // field.input is an object that contains a bunch of event handlers and props
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  // Can pass props, like label below, to component!
  render(){
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  };
};

// Values is an object containing all values entered into the form
function validate(values){
  console.log('values:', values);
  // 1. Create errors object
  const errors = {};

  // 2. Validation
  if(!values.title){
    errors.title = "Enter a title with at least 3 characters!";
  }
  if(!values.categories){
    errors.categories = "Enter a category!";
  }
  if(!values.content){
    errors.content = "Enter some content please!"
  }
  // 3. If errors is empty, form is fine to submit
  //    If errors has ANY properties, redux assume form is invalid
  return errors;

}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
