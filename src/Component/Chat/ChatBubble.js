import React from 'react';

function chatBubble(props) {
    if(props.type === 'out'){
        return (
            <div className="row no-gutters">
                <div className="col-md-6 offset-6">
                    <div className="chat-bubble out d-flex justify-content-between align-items-center">
                        <p>Message</p>
                        <small>11.31</small>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="row no-gutters">
                <div className="col-md-6">
                    <div className="chat-bubble in d-flex justify-content-between align-items-center">
                        <p>Message</p>
                        <small>11.31</small>
                    </div>
                </div>
            </div>
        )
    }

}

export default chatBubble;