import React from 'react';
import { connect } from 'react-redux'

import moment from 'moment'

import { deleteTask, completeTask } from '../../actions'

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

    renderTime = () => {
        const diff = moment(this.props.task.time).diff(moment(Date.now()), 'days')
        if(this.props.task.completed){
            return (
                <span className="mr-3 text-secondary" style={{float: "right"}}><i className="fas fa-bell"></i> {this.props.task.time}</span>
            )
        }
        if(diff<2){
            return (
                <span className="mr-3 text-danger" style={{float: "right"}}><i className="fas fa-bell"></i> {this.props.task.time}</span>
            )
        } else if (diff < 5){
            return (
                <span className="mr-3 text-warning" style={{float: "right"}}><i className="fas fa-bell"></i> {this.props.task.time}</span>
            )
        }

        return (
            <span className="mr-3 text-success" style={{float: "right"}}><i className="fas fa-bell"></i> {this.props.task.time}</span>
        )
    }

    render(){
        this.renderTime()
        return(
            <li className="item">
                <span onClick={this.onChangeClick} style={{float: "right"}} className="mr-3"> 
                    <i className="fas fa-pencil-alt" data-toggle="modal" data-target={`#exampleModal_${this.props.task._id}`}></i>
                    <UpdateModal task={this.props.task}/>
                </span>
                <span className="delete" onClick={this.onDeleteClick}><i className="fas fa-trash-alt"></i></span>
                <span className="task" style={this.taskStyle()}
                      onClick={this.onTaskClick} >
                      {this.props.task.description}
                      {this.renderTime()}
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