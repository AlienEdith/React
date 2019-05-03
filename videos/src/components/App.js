import React, { Component } from 'react';

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.onSearchBarSubmit("Twice"); //default search term
  }

  onSearchBarSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params:{
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectVideo: response.data.items[0]   //default select first video
    });
  };
  
  onSelectVideo = (video) => {
    this.setState({selectVideo: video});
  }

  render() {
    return (
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchBarSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectVideo}/>
              </div>
              <div className="five wide column">
                <VideoList videos={this.state.videos} selectVideo={this.onSelectVideo}/>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default App;
