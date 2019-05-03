import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { UpdateStream, GetOneStream } from '../../actions';
import StreamForm from './streamForm'

class StreamEdit extends React.Component {

  componentDidMount(){
    this.props.GetOneStream(this.props.match.params.id);
  }

  onSubmit = (formValue) => {
    this.props.UpdateStream(this.props.match.params.id, formValue)
  }

  render() {
    return (
      <div>
        <h2>Edit A Stream</h2>
        {/* Setting Initial Values, extract the data that match the field name */}
        <StreamForm 
          initialValues={ 
            _.pick(this.props.stream, "title", "description")
            // {
            //   title: this.props.stream.title ,
            //   description: this.props.stream.description
            // } 
          }
          onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
     stream: state.streams[id]
  }
}

// Setting Initial Values
export default connect(mapStateToProps, {
  UpdateStream, GetOneStream
})(StreamEdit)

