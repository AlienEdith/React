import React from 'react';
import { connect } from 'react-redux';

import { Register } from '../actions';

class RegisterForm extends React.Component{

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
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Name" required
                    value = {this.state.name}
                    onChange = {(e) => this.setState({name: e.target.value})}
                />
                <input type="email" placeholder="Email" required
                    value = {this.state.email}
                    onChange = {(e) => this.setState({email: e.target.value})}
                />
                <input type="password" placeholder="Password" required
                    value = {this.state.password}
                    onChange = {(e) => this.setState({password: e.target.value})}
                />
                <button type="submit">Register</button>
            </form>
        )
    }
}

export default connect(null, {
    Register
})(RegisterForm);