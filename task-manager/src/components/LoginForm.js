import React from 'react';
import { connect } from 'react-redux';

import { Login } from '../actions';

class LoginForm extends React.Component{

    state = {
        email: "",
        password: ""
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.Login(this.state.email, this.state.password)
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="email" placeholder="Email" 
                    value = {this.state.email}
                    onChange = {(e) => this.setState({email: e.target.value})}
                />
                <input type="password" placeholder="Password" 
                    value = {this.state.password}
                    onChange = {(e) => this.setState({password: e.target.value})}
                />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default connect(null, {
    Login
})(LoginForm);