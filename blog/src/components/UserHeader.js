import React from 'react'
import { connect } from 'react-redux';
import { fetchUser, fetchPostsAndUsers } from '../actions'

class UserHeader extends React.Component{
    
    componentDidMount(){
        // this.props.fetchUser(this.props.userId);
    }

    render(){
        // const user = this.props.users.find(user => user.id === this.props.userId);
        if(!this.props.user){
            return null;
        }
        return(
            <div className='header'>{this.props.user.name}</div>
        )
    }

}
// ownProps  = this.props
const mapStateToProps = (state, ownProps) => {
    const user = state.users.find(user => user.id === ownProps.userId);
    return{
        user: user
    }
}

export default connect(mapStateToProps, {
    // fetchUser: fetchUser
    // fetchPostsAndUsers: fetchPostsAndUsers
})(UserHeader);

// make too many repetitve request of same userId
// Use lodash _.memozie