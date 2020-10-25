import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from "react-bootstrap/Form";

const Comprador = () => {
        window.Mercadopago.getIdentificationTypes();
        // const key = 'TEST-84111877-ad71-4d72-82e5-4a5f6645f104';
        // const url = `https://api.mercadopago.com/v1/identification_types?public_key=${key}`
        // const api = await fetch(url);
        // console.log(api);
        // const respuesta = await api.json();
        // console.log(respuesta);
    
    return (
        <div>
            <h3>Detalles del comprador</h3>
            <hr></hr>
            <Form.Group>
                <Form.Label htmlFor="email">E-Mail</Form.Label>
                <Form.Control id="email" name="email" type="text" placeholder="test@test.com"/>
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label htmlFor="docType">Tipo de Documento</Form.Label>
                        <Form.Group>
                            <Form.Control as="select" id="docType" name="docType" data-checkout="docType" type="text">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label htmlFor="docNumber">Numero de Documento</Form.Label>
                        <Form.Control id="docNumber" name="docNumber" data-checkout="docNumber" type="text" placeholder="Documento" />
                    </Form.Group>
                </Col>
            </Row>
        </div>
    );
};

export default Comprador;