import React from 'react';
import Form from "react-bootstrap/Form";

const Comprador = () => {
    return (
        <div>
            <h3>Detalles del comprador</h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tipo de Documento</Form.Label>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select">
                        <option>DNI</option>
                        <option>CUIT</option>
                        <option>CUIL</option>
                    </Form.Control>
                </Form.Group>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Numero de Documento</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

        </div>
    );
};

export default Comprador;