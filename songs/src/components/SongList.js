import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {


  renderList() {
      return this.props.songs.map(song => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button 
                        // execute the function ()
                        onClick={() => this.props.selectSong(song)} 
                        className="ui button primary">Select</button>
                </div>
                <div className="left floated content">
                    {song.title}
                </div>
            </div>
        );
    });
  }  
  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}
//connect is a react component, through connect(using PROPS), tell provider what we need
// provider fetch the data back to connect component => then to this component
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

// Configure connect, args will pass to SongList as props
// this.props === {songs: state.songs}
// pass action creator to connect, then it will be treated as a REAL action creator
// aka automatically pass to the .dispatch(function), update state
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);
/* function connect(){
    return function(){
        return "Hi there"
    }
}*/
