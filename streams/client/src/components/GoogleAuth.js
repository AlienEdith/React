import React from 'react';

class GoogleAuth extends React.Component {

    state = {
        isSignedIn: null
    }

    componentDidMount(){
        // load auth2 ks library to the browser when component first mount
        // callback function: when library successfully loaded
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({   // init our application
                clientId: process.env.REACT_APP_GOOGLE_OAUTH,
                scope: "email profile"
            }).then(() => {  // call back function when the initialization is done
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });

    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null){
            return (
                <div className="ui active loader"></div>
            )
        } else if(this.state.isSignedIn) {
            return (
                <button className="ui red small google button" 
                        onClick={() => this.auth.signOut()}>
                    <i className="google icon" />Logout
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

export default GoogleAuth;
