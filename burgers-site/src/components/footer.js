import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Footer() {
    return (
        <Container fluid className="Footer">
            <Row>
                <Col>
                    <h1 className="d-flex justify-content-start">Alejandro Rodriguez Underyte</h1>
                </Col>
                <Col>
                    <a href="https://github.com/Aegnihr/Practica_React" className="d-flex justify-content-end"><h1>GitHub</h1></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;