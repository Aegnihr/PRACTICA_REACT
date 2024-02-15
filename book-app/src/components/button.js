import React  from "react";
import Button from "react-bootstrap/Button";

export default function BotonReserva({name}){
    return(
        <Button type="button" className="btn btn-primary">{name}</Button>
    )
}