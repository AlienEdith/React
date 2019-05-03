import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {

  // Link ONE context object to a class component 
  // then we can use this.context..., only required when without using Consumer
  // Only useful if we only need just ONE context (one value)
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === "english" ? "Name" : "Naam"
    return (
      <div className="ui field">
        <label>{text}</label>
        <input></input>
      </div>
    );
  }
}

export default Field;
