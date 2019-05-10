import React from 'react'
import { connect } from 'react-redux'

import { Logout } from '../../actions';

import Avatar from './Avatar'
import UpdateUserForm from './UpdateUserForm'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

class IconBar extends React.Component{

    onLogoutClick = () => {
      this.props.Logout(this.props.user.token)
    }

    renderIcons = () => {
        if(this.props.user){
          return (
            <div className="row">
              <div className="col-sm-5"></div>
              <div className="col-3 col-sm-2 mr-sm-1">
                <Avatar user={this.props.user.user}/>
              </div>
              <div className="col-3 col-sm-2">
                <i className="fas fa-portrait" data-toggle="modal" data-target="#UpdateUserModal"></i>
                  <UpdateUserForm user={this.props.user}/>
              </div>
              <div className="col-3 col-sm-2">
                  <i className="fas fa-sign-out-alt" onClick={this.onLogoutClick}></i>
              </div>
            </div>
          )
        }
        return(
          <div className="row">
            <div className="col-sm-5"></div>
            <i className="fas fa-user-plus col-5 col-sm-2 mr-sm-4" label="Register" data-toggle="modal" data-target="#RegisterModal"></i>
              <RegisterForm />
            <i className="fas fa-sign-in-alt col-5 col-sm-2" label="Login"  data-toggle="modal" data-target="#LoginModal"></i>
              <LoginForm />
          </div>
        )
    }

    render(){
        return (
            <div id="IconBar" className="row align-items-center">
              <div className="col-6 col-sm-4">
                Do or Die
              </div>
              <div className="col-0 col-sm-4"></div>
              <div className="col-6 col-sm-4">
                {this.renderIcons()}
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
  Logout
})(IconBar);

