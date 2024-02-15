import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Book from './books.js';

function Library() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3030/books')
            .then((response) =>{
                return response.json();
            })
            .then((books) =>{
                setBooks(books);
            })
    }, []);

    return (
        <Container fluid className="Library">
            <Row>
                <Col className="text-center"><h1>Library</h1></Col>
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <Book book={book} key={index}></Book>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}
export default Library;