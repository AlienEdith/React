import React, { Component } from 'react';
import './VideoItem.css';

class VideoItem extends Component {

    onVideoClick = (event, title) => {
        event.preventDefault();
        this.props.selectVideo(title);
    }

    render() {
        var snippet = this.props.video.snippet;
        return (
            <div 
                className="video-item item" 
                onClick={(event, video) => this.onVideoClick(event, this.props.video)}
            >
                <img className="ui image" src={snippet.thumbnails.medium.url} alt='' />
                <div className="content">
                    <div className="header">{snippet.title}</div>
                    {/* <div className="description">{snippet.description}</div> */}
                </div>
            </div>
        );
  }
}

export default VideoItem;

