import React from 'react';
import { connect } from 'react-redux';

import { UploadAvatar } from '../../actions';

class AvatarModal extends React.Component{

    state = {
      file: null
    }

    onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('avatar', this.state.file)
        this.props.UploadAvatar(this.props.user.token, formData)
        this.props.updated();
    }

    render(){
        return (
            <div className="modal fade" id="AvatarModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" style={{color: "black"}}>Upload Avatar</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input encType="multipart/form-data" type="file" name="avatar" className="form-control" required 
                              //  value = {this.state.file}
                               onChange = {(e) => this.setState({file: e.target.files[0]})}
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal">Upload</button>
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
  UploadAvatar
})(AvatarModal);