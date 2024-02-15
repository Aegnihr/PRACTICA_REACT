import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



function Starter({starters}){   
    return(
        
        <Container fluid className="Starter">
            <Row>
                <Col>
                    <h2 className="titulo d-flex justify-content-center">{starters.Name}
                </h2>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-start">
                <ul>
                    <li>Quantity: {starters.Type}</li>
                    <li>Price: {starters.Price}</li>
                </ul>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Starter;