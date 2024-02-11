import React from "react";
import LogoCabecera from '../assets/img/libro.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <Container fluid className="Header">
            <Row>
                <Col className="text-center" lg={11}><h1 >Book Store</h1></Col>
                <Col className="d-flex justify-content-end" lg={1}><img className="Header-logo" src={LogoCabecera} alt="logo-Book" width="50" /></Col>
            </Row>
        </Container>
    );
}
export default Header;