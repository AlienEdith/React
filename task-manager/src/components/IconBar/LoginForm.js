import React from 'react';
import { connect } from 'react-redux';

import { Login } from '../../actions';

class LoginModal extends React.Component{

    state = {
        email: "",
        password: ""
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.Login(this.state.email, this.state.password)
    }

    render(){
        
        return (
            <div className="modal fade" id="LoginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" style={{color: "black"}}>Login</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-control" required 
                                value = {this.state.email}
                                onChange = {(e) => this.setState({email: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" required
                                value = {this.state.password}
                                onChange = {(e) => this.setState({password: e.target.value})}
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal">Login</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default connect(null, {
    Login
})(LoginModal);