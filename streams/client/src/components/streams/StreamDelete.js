import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Modal from '../modal'
import { GetOneStream, DeleteStream } from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.GetOneStream(this.props.match.params.id);
  }

  actions = (
    <React.Fragment>
        <div className="ui negative button"
             onClick={() => this.props.DeleteStream(this.props.match.params.id)}>
          Approve
        </div>
        <Link className="ui cancel button"
              to="/">
          Cancel
        </Link>
    </React.Fragment>
  )

  onDismiss = () => {
    history.push("/")
  }

  renderContent = () => {
    if(!this.props.stream){
      return 'Are you sure you want to delete stream?'
    }
    return `Are you sure you want to delete stream ${this.props.stream.title}`
  }

  render() {
    return (
      <div>
        <Modal header="Delete Stream" 
               content={this.renderContent()}
               actions={this.actions}
               onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {
  GetOneStream, DeleteStream
})(StreamDelete);
