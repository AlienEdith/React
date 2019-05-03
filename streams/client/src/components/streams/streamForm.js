import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  // error message helper function
  renderError = (meta) => {
    if(meta.touched && meta.error){ // user selected then deselected the input
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    } 
  }

  renderInput = (formProps) => {
    // automatically passed to this function
    // console.log(formProps)
    // console.log(formProps.meta) //including error message
    const className = `field ${formProps.meta.error && formProps.meta.touched? 'error': ''}`
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input type="text" {...formProps.input} // add all as properties
               //onChange={formProps.input.onChange} // automatically event handler
               //value={formProps.input.value}  // value will be stored in state automatically
               autoComplete="off"
        />
        {this.renderError(formProps.meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    // event.preventDefault(); // No need, handleSubmit() will handle that
    // console.log(formValues)
    // automatically pass all the form values to here, key(name)-value pairs
    // do API call or smth
    this.props.onSubmit(formValues); // call back function from parent component
  }


  render() {
    // console.log(this.props)
    return (
      <div>                  {/* automatically pass form values to onSubmit() */}
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="title" 
                 component={this.renderInput}
                 label="Title"
           />
          <Field name="description"
                 component={this.renderInput}
                 label="Description"
          />
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// input validation function, automatically pass form values to this function
const validate = (formValues) => {

    // return an object { name: errorMessage } => form is not valid
    const errors = {};

    if(!formValues.title){
        errors.title = "Please enter a stream title!";
    } 

    if(!formValues.description){
      errors.description = "Please enter a stream description!"
    }

    //return an empty object => from is valid
    return errors;
}

export default reduxForm({
  form: 'streamForm',  // name of the form
  validate: validate     // input validation function, formProps.meta.error: error message
})(StreamForm);
