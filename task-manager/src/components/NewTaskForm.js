import React from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import { addTask } from '../actions';

class NewTaskForm extends React.Component{

    state = {
        desc: "",
        time: moment(Date.now()).format("YYYY-MM-DD")
    }

    onSubmit = (event) => {
        event.preventDefault();
        event.target.lastChild.value = ""
        this.props.addTask(this.props.user.token, this.state.desc, this.state.time)
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
    addTask
})(NewTaskForm)