import React from 'react';
import { connect } from 'react-redux';

import { Register } from '../../actions';

class RegisterModal extends React.Component{

    state = {
        name: "",
        email: "",
        password: ""
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.Register(this.state.name, this.state.email, this.state.password)
    }

    render(){
        return (
            <div className="modal fade" id="RegisterModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" style={{color: "black"}}>Register</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" required autoComplete="false"
                                value = {this.state.name}
                                onChange = {(e) => this.setState({name: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-control" required autoComplete="false"
                                value = {this.state.email}
                                onChange = {(e) => this.setState({email: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" required autoComplete="false"
                                value = {this.state.password}
                                onChange = {(e) => this.setState({password: e.target.value})}
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal">Register</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default connect(null, {
    Register
})(RegisterModal);