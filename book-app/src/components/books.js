import React from "react";


function Book(props) {
    const { title, author, genre, publication_year } = props.book;
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{genre}</td>
            <td>{publication_year}</td>
        </tr>
    );
}
export default Book;