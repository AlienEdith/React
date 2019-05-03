import React from 'react';

import CommentDetail from './CommentDetail'

const ApprovalCard = (props) => {
    return(
        <div className="ui cards">
            {props.CommentDetail}
            <div className="card">
                <div className="content">
                    {/* getting passed component/children inside props.children */}
                    {props.children}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard;