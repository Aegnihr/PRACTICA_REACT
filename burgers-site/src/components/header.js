import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "../assets/css/App.css";

function Header(){
    return(
        <Container fluid>
            <Row className="Header">
                <Col>
                    <h1 className="d-flex justify-content-center">Hamburgueseria</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;