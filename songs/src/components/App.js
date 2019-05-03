import React, { Component } from 'react';
import SongList from './SongList'
import SongDetail from './SongDetail';
import { SelectSong } from '../actions';


class App extends Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="six wide column">
            <SongList />
          </div>
          <div className="seven wide column">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
