import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui comments">
            {/* Prop could also pass component/plain text as CHILDREN*/}
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                </div>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                {/* Component be used as a JSX tag */}
                {/* passing props: key = "value"/{ js_variable } */}
                <CommentDetail
                    author="Momo" 
                    content="Dancing Mochine" 
                    avatar={faker.image.avatar()} 
                /> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sana" 
                    content="No Sana, No Life" 
                    avatar={faker.image.avatar()} 
                /> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Mina" 
                    content="Black Swan" 
                    avatar={faker.image.avatar()}
                /> 
            </ApprovalCard> 
        </div>
        
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

