import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
  render() {
      if(this.props.selectedSong){
        return (
            <div>
                <h3>Details for:</h3>
                <p>
                    Title:{this.props.selectedSong.title}
                </p>
                <p>
                    Duration: {this.props.selectedSong.duration}
                </p>
            </div>
          );
      }
      return <div>Please Select A Song</div>
  }
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    };
}
export default connect(mapStateToProps)(SongDetail);
