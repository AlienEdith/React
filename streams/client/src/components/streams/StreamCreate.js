import React from 'react';
import { connect } from 'react-redux';
      //component, function
import { CreateStream } from '../../actions';
import StreamForm from './streamForm'

class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
     this.props.CreateStream(formValues);
  }

  render() {

    return (
      <div>                  
        <h2>Create A Stream</h2>
        <StreamForm  onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, {
  CreateStream: CreateStream
})(StreamCreate)

