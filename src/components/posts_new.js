import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component{
  // renderTitleField just returns some JSX, however we
  // still have to wire up the jsx to the field component
  // Field object contains some event handlers that we need to wire up to
  // the jsx we are returning
  // Must provide field object parameter
  // field.input is an object that contains a bunch of event handlers and props
  renderField(field) {
    // Pulls meta off of field, and pulls touched and error off of meta. wow
    const { meta : { touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values){
    console.log('onSubmit values:', values);
  }

  render(){
    // const handleSubmit = this.props.handleSubmit;
    const { handleSubmit } = this.props; // added by reduxForm

    // Can pass props, like label below, to component!
    return (
      // On user submit, first the redux side of things will run,
      // then, if ok, calls the function we defined and passes us the
      // values to work with
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  };
};

// Values is an object containing all values entered into the form
function validate(values){
  console.log('validate values:', values);
  // 1. Create errors object
  const errors = {};

  // 2. Validation - errors.property corresponds to component name attribute
  if(!values.title){
    errors.title = "Enter a title!";
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

// Like connect, reduxForm is adding a bunch of properties to our component
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
