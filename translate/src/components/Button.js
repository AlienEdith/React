import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import {ColorContext} from '../contexts/ColorContext';

class Button extends Component {
  renderSubmit(value){
    return value === "english" ? "Submit" : "Voorleggen"
  }

  renderColor(value){
    return value === "red" ? "ui negative button" : "ui primary button"
  }
  // Consumer: support multiple context object, just use multiple consumer
  render() {
    return (
      <div>
        {/* nasty because consumer must be followed by a function*/}
        <ColorContext.Consumer>
          {colorValue => {
            return (
              <button className={this.renderColor(colorValue)}>
              <LanguageContext.Consumer>
                {/* function provided by Consumer, call the funtion automaticlly
                    First arugument is the value */}
                { (LanguageValue) =>  this.renderSubmit(LanguageValue.language) }
              </LanguageContext.Consumer>
              </button>
            )
            }
          }

        </ColorContext.Consumer>
      </div>
    );
  }
}

export default Button;
