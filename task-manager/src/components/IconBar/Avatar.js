import React from 'react';
import AvatarModal from './AvatarModal'

class Avatar extends React.Component{


    state = {
      imageHash: Date.now()
    }

    updated = () => {
      this.setState({imageHash: Date.now()})
    }

    render(){
        if(!this.props.user.avatar){
            return (
              <div>
                <i className="far fa-user-circle" data-toggle="modal" data-target="#AvatarModal"></i>
                    <AvatarModal updated={this.updated}/>
              </div>
            )
        }
        const imageURL = `${process.env.REACT_APP_API}/users/${this.props.user._id}/avatar?${this.state.imageHash}`
        console.log(imageURL)
          return (
            <div>
              <img src={imageURL} alt="Avatar" className="avatar" data-toggle="modal" data-target="#AvatarModal"/>
                <AvatarModal updated={this.updated}/>
            </div>
          )
    }
}

export default Avatar;