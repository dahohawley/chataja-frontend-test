import React,{makeStyles} from 'react';
import Logo from '../Logo.png'

import {
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap'

function NavbarComponent(props) {
    const navBarLogoStyles = {
        maxWidth : "52px",
        objectFit : "cover"
    }

    return (
        <Row>
            <Col md={12}>
                <Navbar color="light">
                    <Container>
                        <NavbarBrand href="/">
                            <img src={Logo} style={navBarLogoStyles} ></img>
                        </NavbarBrand>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    );
}

export default NavbarComponent;
