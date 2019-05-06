import React from 'react';
import { connect } from 'react-redux'

import { getTaskList } from './actions';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import NewTaskForm from './components/NewTaskForm'
import Item from './components/Item'

class App extends React.Component {
  

  shouldComponentUpdate(nextProps, nextState) {
    return (JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) || (JSON.stringify(nextProps.tasks) !== JSON.stringify(this.props.tasks))
  }

  getTasks = () => {
    
  }
  renderTaskList = () => {
    this.props.getTaskList(this.props.user.token)

    const list = this.props.tasks.map(task => {
      return <Item key={task._id} task={task} />
    })
    return list;
  }

  renderContent = () => {
    if(this.props.user){
      return (
        <div>
          <NewTaskForm />
          <ul>
            {this.renderTaskList()}
          </ul>
        </div>
      )
    }
    return (
      <div>Please Login First</div>
    )
  }

  render() {
    console.log("render")
    return (
      <div id="container">
        <RegisterForm />
        <LoginForm />
        <h1>To-do List<span id="plus"><i className="fas fa-plus"></i></span> </h1>
        {this.renderContent()}
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

export default connect(mapStateToProps, {
  getTaskList
})(App);
