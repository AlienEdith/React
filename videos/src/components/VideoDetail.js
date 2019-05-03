import React, { Component } from 'react';


class VideoDetail extends Component {

    render() {
        if(!this.props.video){
            return <div>Loading...</div>
        }

        const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
        return (
            <div className="ui segment">
                <div className="ui embed">
                    <iframe title="video title" src={videoSrc} />
                </div>
                <h4 className="ui header">{this.props.video.snippet.title}</h4>
                <p>{this.props.video.snippet.description}</p>
            </div>
        );
  }
}

export default VideoDetail;
