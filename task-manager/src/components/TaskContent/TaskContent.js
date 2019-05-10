import React from 'react'
import { connect } from 'react-redux'

import { getTaskList } from '../../actions';

import TaskBar from './TaskBar'
import Item from './Item'

class TaskContent extends React.Component{

    componentDidMount() {
        this.props.getTaskList(this.props.user.token)
    }

    renderList = () => {
        return this.props.tasks.map(task => {
          return <Item key={task._id} task={task} />
        })
    }

    render(){
        return (
            <div>
                <TaskBar />
            <ul>
              {this.renderList()}
            </ul>
          </div>
        )
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
})(TaskContent);

