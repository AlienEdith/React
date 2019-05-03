import React, { Component } from 'react';

import VideoItem from './VideoItem'

class VideoList extends Component {

    render() {
        const videos = this.props.videos.map((video) => {
            return(
                <VideoItem key={video.id.videoId} video={video} selectVideo={this.props.selectVideo}/>
            );
        });

        return (
            <div className="ui relaxed divided list">
                {videos}
            </div>
        );
  }
}

export default VideoList;
