import React, { Component } from 'react';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import {ColorContext} from '../contexts/ColorContext';


class App extends Component {
  // state = {
  //   language: "english",
  //   color: "red"
  // }

  // onLanguageChange = (language, color) => {
  //   this.setState({
  //     language: language,
  //     color: color
  //   })
  // }

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
        <LanguageSelector />
        {/* simply nested provider */}
        {/* <ColorContext.Provider value={this.state.color}> */}
          <UserCreate />
        {/* </ColorContext.Provider> */}
        </LanguageStore>
      </div>
    );
  }
}

export default App;
