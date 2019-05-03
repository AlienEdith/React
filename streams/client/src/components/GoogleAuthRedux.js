import React from 'react';
import { connect } from 'react-redux';

import { SignIn, SignOut } from '../actions';

class GoogleAuthRedux extends React.Component {

    // Why use Redux?
    // Without Redux, state only store in the Auth Component
    // However, other component also need to know, whether a user in signed in.
    // Using redux, store the isSignedIn as a global state

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({   
                clientId: process.env.REACT_APP_GOOGLE_OAUTH,
                scope: "email profile"
            }).then(() => {  
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });

    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.SignIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getBasicProfile().getName());
        } else {
            this.props.SignOut();
        }
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn === null){
            return (
                <div className="ui active loader"></div>
            )
        } else if(this.props.isSignedIn) {
            return (
                <button className="ui red small google button" 
                        onClick={() => this.auth.signOut()}>
                    <i className="google icon" />Logout {this.props.name}
                </button>
            )
        } else {
            return (
                <button className="ui red small google button" 
                        onClick={() => this.auth.signIn()}>
                    <i className="google icon" />SignIn
                </button>
            )        
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.id,
        userName: state.auth.name
    }
}

export default connect(mapStateToProps, {
    SignIn: SignIn, SignOut: SignOut
})(GoogleAuthRedux);
