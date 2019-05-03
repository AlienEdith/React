import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListAllStreams } from '../../actions'

class StreamList extends React.Component {
  
  componentDidMount(){
    this.props.ListAllStreams();
  }

  renderButton = (stream) => {
    if(stream.userId === this.props.auth.userId){
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="negative ui button">Delete</Link>
        </div>
      )
    }
  }

  renderStreams = () => {
    return this.props.streams.map(stream => {
      return ( 
        <div key={stream.id} className="item">
          {this.renderButton(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
              <Link to={`/streams/${stream.id}`} className="header">
                {stream.title}
              </Link>
              <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    })
  }

  renderCreate = () => {
    if(this.props.auth.isSignedIn) {
      return (
        <div style={ {textAlign: 'right'} }>
          <Link to='/streams/new' className="ui button primary">Create Stream</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderStreams()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps  = (state) => {
  return {
              // pulled out objects,  insert into an array
    streams: Object.values(state.streams),
    auth: state.auth
  }
}

export default connect(mapStateToProps, {
  ListAllStreams
})(StreamList);
