import React from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import { addTask } from '../../actions';

class NewTaskForm extends React.Component{

    state = {
        desc: "",
        time: moment(Date.now()).format("YYYY-MM-DD")
    }

    onSubmit = (event) => {
        event.preventDefault();
        event.target.firstChild.lastChild.firstChild.value = ""
        this.props.addTask(this.props.user.token, this.state.desc, this.state.time)
    }

    render(){
        
        return (
            <form onSubmit={this.onSubmit} className="col-12 col-lg-7">
                <div className="row">
                    <div className="col-lg-5">
                        <input type="date" required
                        value = {this.state.time}
                        onChange = {(e) => this.setState({time: e.target.value})}
                        />
                    </div>
                    <div className="col-lg-7">
                        <input type="text" placeholder="Add New Todo, hit ENTER!" required
                            value = {this.state.desc}
                            onChange = {(e) => this.setState({desc: e.target.value})}
                        />
                    </div>
                </div>
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