import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <Container className="Footer" fluid>
        <Row className="text-center">
            <Col><h1>Alejandro Rodriguez Underyte</h1></Col>
            <Col><a href="https://github.com/Aegnihr/Practica_React"><h1>GitHub</h1></a></Col>
        </Row>
    </Container>
    ); 
}
export default Footer;