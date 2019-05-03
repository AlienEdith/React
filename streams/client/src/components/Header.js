import React from 'react';
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'
import GoogleAuthRedux from './GoogleAuthRedux'

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item"> 
            Streamey 
        </Link>
        <div className="right menu">
            <Link to="/" className="item">
                All Streams
            </Link>
            <GoogleAuthRedux />
        </div>
      </div>
    );
  }
}

export default Header;
