import React, { useState } from 'react';
import FriendList from './Chat/FriendList'
import Users from '../Users' 
import ActiveChat from './Chat/ActiveChat'
import fire from '../fire'

import {
    Container,
    Col,
    Row,
    Card,
    CardBody,
    Navbar,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

function Chat(props) {
    const [hasChat,setHasChat] = useState(false)
    const [chatUser,setChatUser] = useState(null)
    const [messages,setMessages] = useState([])

    if(localStorage.getItem('loggedIn') != 1){
        window.location.href = "/"
    }
    const userId        = localStorage.getItem("userId")
    const activeUser    = Users.filter((user) => {
        if(user.id == userId) {
            return user
        }
    })[0]

    const errMessage = (err) => {

    }

    const clickUser = (data) =>{
        let chatId  = null
        
        if(userId < data.id){
            chatId  = userId+"_"+data.id
        }else{
            chatId  = data.id+"_"+userId
        }

        const ref = fire.database().ref('chats/'+chatId)

        ref.on('value',(data)=>{
            setMessages(data.val())
        },errMessage)
        setChatUser(data)
        setHasChat(true)
    }

    const sendMessage = (message) =>{
        let chatId  = null
        
        if(userId < chatUser.id){
            chatId  = userId+"_"+chatUser.id
        }else{
            chatId  = chatUser.id+"_"+userId
        }
        
        fire.database().ref('chats/'+chatId).push({
            timestamps : new Date().toString(),
            message : message,
            sender : userId
        })
    }
    
    const Logout = () =>{
        localStorage.removeItem('userId')
        localStorage.removeItem('loggedIn')
        window.location.reload()
    }

    const currentUser   = parseInt(localStorage.getItem("userId"))

    const testProfileImage = "https://pbs.twimg.com/profile_images/1223572104400031744/dNUw2Un6.jpg"


    // <img className="profilePicture" src="https://pbs.twimg.com/profile_images/1223572104400031744/dNUw2Un6.jpg"></img>
    return (
        <Container className="chatContainer">
            <Row className="no-gutters">
                <Col xs={5} className="chatList border-right">
                    <div className="settingsTray">
                        <img className="profilePicture" src={activeUser.avatar}></img>
                        <span className="float-right">
                            <UncontrolledDropdown  >
                                <DropdownToggle tag="i">
                                    <i className="fa fa-ellipsis-h settingsTray_icon" aria-hidden="true"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" onClick={()=>{Logout()}}>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </span>
                    </div>

                    <div className="searchBox">
                        <div className="input-wrapper">
                            <i className="fa fa-search searchBox--icon"></i>
                            <input type="text" className="searchInput" placeholder="Search"/>
                        </div>
                    </div>

                    {
                        Users.map((user)=>{
                            if(currentUser !== user.id) {
                                return <FriendList
                                    key={user.id}
                                    alldata={user}
                                    avatar={user.avatar} 
                                    name={user.name}
                                    lastMessage="just a test bro"
                                    lastMessageTime="11:31"
                                    onClick={()=>clickUser(user)}
                                />
                            }
                        })
                    }

                </Col>
                
                <Col xs={7} className="chatWindow d-flex justify-content-between flex-column">
                    <ActiveChat 
                        hasChat={hasChat} 
                        sendMessage={sendMessage} 
                        user={chatUser} 
                        messages={messages}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Chat;