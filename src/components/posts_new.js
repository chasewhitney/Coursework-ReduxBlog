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
    console.log('field is:', field);
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
          label="Tags"
          name="tags"
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

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
