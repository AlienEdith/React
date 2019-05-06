import React from 'react';
import { connect } from 'react-redux';

import { updateTask } from '../actions';

class UpdateTaskForm extends React.Component{

    state = {
        desc: this.props.task.description,
        time: this.props.task.time
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.updateTask(this.props.user.token, this.props.task._id, this.state.desc, this.state.time)
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="date" required
                    value = {this.state.time}
                    onChange = {(e) => this.setState({time: e.target.value})}
                />
                <input type="text" placeholder="Add New Todo" required
                    value = {this.state.desc}
                    onChange = {(e) => this.setState({desc: e.target.value})}
                />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      user: state.user
    })
}

export default connect(mapStateToProps, {
    updateTask
})(UpdateTaskForm)