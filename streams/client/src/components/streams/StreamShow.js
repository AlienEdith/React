import React from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import { GetOneStream } from '../../actions';

class StreamShow extends React.Component {

  constructor(props){
    super(props)
    this.VideoRef = React.createRef();
  }

  buildPlayer = () => {
    if(this.flvplayer || !this.props.stream){
      return;
    }
    
    this.flvplayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });
    this.flvplayer.attachMediaElement(this.VideoRef.current);
    this.flvplayer.load();
  }

  componentDidMount(){
    // fetch data
    this.props.GetOneStream(this.props.match.params.id);

    // set up flv player
    this.buildPlayer();
  }

  componentDidUpdate(){
    this.buildPlayer();
  }

  componentWillUnmount(){
    // tell video component to stop streaming videos
    this.flvplayer.destroy();
  }

  render() {
    if(!this.props.stream){
      return <div>Loading...</div>
    }

    return (
      <div>
        <video 
          ref={this.VideoRef}
          style={ {width:'100%'} }
          controls={true}  
        />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5> 
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
  GetOneStream
})(StreamShow);
