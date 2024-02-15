import React from 'react';
import Burger from './burgers';
import Starter from './starter';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react';
import '../assets/css/App.css';



function Hamburguers_Site() {

    const [hamburguers, setHamburguers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/hamburguers')
            .then((response) => {
                return response.json()
            })
            .then((hamburguers) => {
                setHamburguers(hamburguers)
            })
    }, [])
    const [starters, setstarters] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/starters')
            .then((response) => {
                return response.json()
            })
            .then((starters) => {
                setstarters(starters)
            })
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="d-flex justify-content-center title-starters">Starters</h1>
                </Col>
            </Row>
            <Row>
                {
                    starters.map((starters, index) => {
                        return (
                            <Col xs={4} md={4} lg={4}>
                                <Starter starters={starters} key={index}></Starter>
                            </Col>
                        );
                    })
                }
            </Row>
            <Row >
                <Col>
                    <h1 className="d-flex justify-content-center title-burgers">Medac Burgers</h1>
                </Col>
            </Row>
            <Row>
                {
                    hamburguers.map((hamburguers, index) => {
                        return (
                            <Col xs={4} md={4} lg={4}>
                                <Burger hamburguers={hamburguers} key={index}></Burger>
                            </Col>

                        );
                    })
                }
            </Row>

        </Container>


    );
}
export default Hamburguers_Site;