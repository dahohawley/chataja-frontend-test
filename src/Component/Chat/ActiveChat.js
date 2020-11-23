import React, { useState } from 'react';
import NoChat from './NoChat'
import ChatBubble from './ChatBubble'

import { 
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Navbar,
    Col,
    Row,
} from 'reactstrap'

function ActiveChat(props) {
    const user    = props.user

    if(!props.hasChat){
        return <NoChat/>
    }

    const sendMessage = (e) =>{
        e.preventDefault()
        let message = document.getElementById('chat-input').value
        document.getElementById('chat-input').value = ""
        props.sendMessage(message)
    }
    
    let messageData = []
    if(props.messages != null){
        for(const message in props.messages){
            props.messages[message]['id'] = message
            messageData.push(props.messages[message])
        }
    }

    const msgElement = messageData.map(message=>{
        return <ChatBubble key={message['id']} message={message} />
    })

    return (
        <>
        <Row>
            <Col md={12}>
                <div className="settingsTray d-flex">
                    <img src={user.avatar} alt="" className="profilePicture"/>
                    <div className="userInfo ml-3">
                        <h6>{user.name}</h6>
                        <small className="text-muted">Online</small>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className="chat-content no-gutters">
            <Col md={12} className="m-2">
                {
                    msgElement
                }
            </Col>
        </Row>

        <Row className="no-gutters">
            <Col md={12} className="send-chat-box">
                <form className="d-flex align-items-center form-chat-box" onSubmit={(e)=>sendMessage(e)} id="form-message">
                    <i className="fas fa-smile chat-box-button"></i>
                    <input name="send-chat" id="chat-input" autoComplete="off" placeholder="Type a message" className="send-chat" type="text"></input>
                    <i className="fa fa-paper-plane chat-box-button mr-2" onClick={(e) => sendMessage(e)} aria-hidden="true" ></i>
                </form>
            </Col>
        </Row>
        </>
    );
}

export default ActiveChat;