import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component{
    render(){
        return ReactDOM.createPortal(
            // hide the modal when click on the background
            <div onClick={this.props.onDismiss} className="ui dimmer modals visible active">
                {/* don't hide the modal when click on modal itself */}
                <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">{this.props.header}</div>
                    <div className="content">
                        {this.props.content}
                    </div>
                    <div className="actions">
                        {this.props.actions}
                    </div>
                </div>
            </div>,
            document.querySelector("#modal")    //insert under this HTML element
        );
    }
}

export default Modal;