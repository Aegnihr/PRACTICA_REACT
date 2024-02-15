import React from "react";
import BotonReserva from "../components/button";


function Book(props) {

    const { title, author, genre, publication_year, available } = props.book;
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{genre}</td>
            <td>{publication_year}</td>
            <td className="d-flex justify-content-center">
                {
                   available
                   ? <BotonReserva name="Reservar"></BotonReserva>
                   : <BotonReserva name="Avisar"></BotonReserva>
                }
            </td>
        </tr>
    );
}
export default Book;