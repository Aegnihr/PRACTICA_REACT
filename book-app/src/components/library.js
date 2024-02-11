import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Book from './books.js';

const books = [
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "publication_year": 1954
    },
    {
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "genre": "Magical Realism",
        "publication_year": 1967
    },
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "publication_year": 1997
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopia",
        "publication_year": 1949
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance",
        "publication_year": 1813
    },
    {
        "title": "Chronicle of a Death Foretold",
        "author": "Gabriel García Márquez",
        "genre": "Magical Realism",
        "publication_year": 1981
    }
];
function Library() {
    return (
        <Container fluid>
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
                        {books.map((book1, index) => (
                            <Book book={book1} key={index}></Book>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}
export default Library;