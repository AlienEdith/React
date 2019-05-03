import React from 'react';


const CommentDetail = (props) => {
    // Getting props as a js object
    return (
        <div className="comment">
            <a className="avatar">
                <img alt="avatar" src= { props.avatar }/>
            </a>
            <div className="content">
                <a className="author"> { props.author }   </a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    { props.content }
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;