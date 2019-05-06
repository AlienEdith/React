import React from 'react';
import { connect } from 'react-redux'

import { deleteTask, completeTask } from '../actions'

import UpdateModal from './UpdateModal';

class Item extends React.Component{

    completedStyle = {
        color: "lightgrey",
        textDecoration: "line-through"
    }

    taskStyle = () => {
        if(this.props.task.completed){
            return this.completedStyle
        }
    }

    onDeleteClick = () => {
        this.props.deleteTask(this.props.user.token, this.props.task._id)
    }

    onTaskClick = () => {
        if(this.props.task.completed){
            this.props.completeTask(this.props.user.token, this.props.task._id, false)
        } else {
            this.props.completeTask(this.props.user.token, this.props.task._id, true)
        }
    }

    render(){
        return(
            <li>
                <span className="delete" onClick={this.onDeleteClick}><i className="fas fa-trash-alt"></i></span>
                <span className="task" style={this.taskStyle()}
                      onClick={this.onTaskClick} >
                      {this.props.task.description}
                </span>  
                <span>{this.props.task.time}</span>
                <span onClick={this.onChangeClick}> 
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal_${this.props.task._id}`}>
                    Update
                </button>
                    <UpdateModal task={this.props.task}/>
                 </span>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      user: state.user
    })
}

export default connect(mapStateToProps, {
    deleteTask, completeTask
})(Item)