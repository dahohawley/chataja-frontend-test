import React,{ useState } from 'react'
import NavbarComponent from './NavbarComponent'
import {
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Container,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Button
} from 'reactstrap'
import Logo from '../Logo.png'


import './Login/index.css'

export default function Login(){
    if(localStorage.getItem('loggedIn')){
        window.location.href="/chat"
    }

    const users = [
        {
            id  : 1,
            name : "Jarjit Singh",
            avatar : "https://api.adorable.io/avatars/160/jarjit@mail.com.png",
            email : "jarjit@mail.com",
            password : "123456"
        },
        {
            id  : 2,
            name : "Ismail bin Mail",
            avatar : "https://api.adorable.io/avatars/160/ismail@mail.com.png",
            email : "ismail@mail.com",
            password : "123456"
        }
    ]

    const [email,setEmail] = useState(false)
    const [password,setPassword] = useState(false)
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")

    const logIn = ()=>{
        let foundUser = null
        users.filter(user=>{
            if(user.email === email) {
                setEmailError("")
                foundUser = user
                if(user.password === password){
                    localStorage.setItem("loggedIn",1)
                    localStorage.setItem("userId",user.id)
                    window.location.href="/chat"
                    setPasswordError()
                    return true
                }else{
                    setPasswordError("Password tidak sesuai.")
                }
            }
        })
        
        if (foundUser == null){
            setEmailError("Email tidak ditemukan!")
        }

    }


    const imageStyle = {
        maxWidth : "500px",
        objectFit : "cover",
        round:"50%"
    }
    return (
        <>
            <NavbarComponent/>
            <Container className="mt-2">
                <Card>
                    <CardBody>
                        <Row>
                            <Col className="d-flex align-items-center justify-content-center">
                                <img src="https://img.freepik.com/free-vector/messages-concept-illustration_114360-583.jpg?size=338&ext=jpg&ga=GA1.2.780893131.1600732800"></img>
                            </Col>

                            <Col>
                                <Row className="mb-2">
                                    <Col>
                                        <input 
                                            type="text" 
                                            placeholder="Email" 
                                            className="form-control"
                                            onChange={e=>{
                                                setEmail(e.target.value)
                                            }}
                                        />
                                        <small className="text-danger">
                                            {emailError}
                                        </small>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col>
                                        <input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="form-control"
                                            onChange={e=>{
                                                setPassword(e.target.value)
                                            }}
                                        />
                                        <small className="text-danger">
                                            {passwordError}
                                        </small>

                                    </Col>
                                </Row>

                                <Row className="mt-2">
                                    <Col className="d-flex justify-content-end">
                                        <Button color="danger" size="sm" onClick={()=>logIn()}>Sign in</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}