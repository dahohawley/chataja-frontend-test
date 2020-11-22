import React from 'react';
import {
    Row,
    Col
} from 'reactstrap'

function NoChat(props) {
    return (
        <div className="noChat">
            <Row>
                <Col className="d-flex justify-content-center">
                    <img id="noChatImage" src="https://image.freepik.com/free-vector/social-media-chatting-infographic-flat-design_40876-775.jpg"></img>
                </Col>
            </Row>

            <h2 id="noChatText" className="d-flex justify-content-center align-items-center">
                Keeping you connected
            </h2>
        </div>
    );
}

export default NoChat;