import React from 'react';
import { connect } from 'react-redux';

import { updateTask } from '../../actions';

class UpdateModal extends React.Component{
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
            <div className="modal fade" id={`exampleModal_${this.props.task._id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Task</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
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
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal">Update</button>
                </div>
              </div>
            </div>
          </div>
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
})(UpdateModal)