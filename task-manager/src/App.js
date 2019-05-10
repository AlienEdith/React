import React from 'react';
import { connect } from 'react-redux'

import IconBar from './components/IconBar/IconBar'
import TaskContent from './components/TaskContent/TaskContent'

class App extends React.Component {
  

  shouldComponentUpdate(nextProps) {
    return (JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) || (JSON.stringify(nextProps.tasks) !== JSON.stringify(this.props.tasks))
  }



  renderContent = () => {
    if(this.props.user){
      return (
        <TaskContent />
      )
    }
    return (
      <h2 id="LoginAlert">Please Login First</h2>
    )
  }

  render() {
    return (
      <div className="container">
        <IconBar />
        {this.renderContent()}

        <div id="devnote">
          <h4>Dev Note</h4>
          <ul>
            <li>After register, you will get an email notification, pls check your spam folder! </li>
            <li>The API development used JsonWebToken (not session), user need to login again after refreshing the page </li>
            <li>After Upload / Update Avatar, logout/login again OR upload <b>twice</b> to see the changes (due to browser cache)</li>
            <li>The Error handling now is using alert, might be improved later </li>
          </ul>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    tasks: state.tasks
  })
}

export default connect(mapStateToProps)(App);
