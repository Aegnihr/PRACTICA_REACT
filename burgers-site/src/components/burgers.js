import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Buttton from "../components/button"



function Burger({ hamburguers }) {
    return (

        <Container fluid className="Burger">
            <Row>
                <Col><h2 className="titulo d-flex justify-content-center">{hamburguers.Name}</h2>
                </Col>
            </Row>
            <Row>
                
                <Col className="d-flex justify-content-start">
                    <ul>
                        <li>Meet: {hamburguers.Meet_type}</li>
                        <li>Sauce: {hamburguers.Sauce}</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Buttton message="Added to your shop cart">Add</Buttton>
                </Col>
            </Row>
        </Container>

    )
}

export default Burger;