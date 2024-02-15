import React from 'react';
import Button from 'react-bootstrap/Button';

function Buttton({ message }) {

    return (
        <Button className="btn btn-primary" onClick={
            () => { alert(message) }
        }>
        </Button>
    )

}

export default Buttton;