import React from 'react';

import UpdateTaskForm from '../components/UpdateTaskForm'

class UpdateModal extends React.Component{

    render(){
        
        return (
            <div className="modal fade" id={`exampleModal_${this.props.task._id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                    <UpdateTaskForm task={this.props.task}/>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default UpdateModal;