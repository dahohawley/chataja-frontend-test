import React from 'react';

function FriendList(props) {
    return (
        <div className="friendList" onClick={props.onClick}>
            <img src={props.avatar} alt="" className="mt-2 ml-2 profilePicture"/>
            <div className="text">
                <h6>{props.name}</h6>
                <p>{props.lastMessage}</p>
            </div>
            <span className="text-muted send-time">{props.lastMessageTime}</span>
        </div>
    );
}

export default FriendList;