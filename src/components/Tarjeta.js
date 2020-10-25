import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Tarjeta = () => {
  // Obtener método de pago de la tarjeta
  const handleChange = (e) => {
    console.log(e.target.value);
    let cardnumber = document.getElementById("cardNumber").value;
    if (cardnumber.length >= 6) {
      let bin = cardnumber.substring(0, 6);
      window.Mercadopago.getPaymentMethod(
        {
          bin: bin,
        },
        setPaymentMethod
      );
    }
  };

  function setPaymentMethod(status, response) {
    console.log(response);
    if (status === 200) {
      let paymentMethod = response[0];
      document.getElementById("paymentMethodId").value = paymentMethod.id;

      if(paymentMethod.additional_info_needed.includes("issuer_id")){
          getIssuers(paymentMethod.id);
      } else {
          getInstallments(
              paymentMethod.id,
              document.getElementById('transactionAmount').value
          );
      }
    } else {
      alert(`payment method info error: ${response}`);
    }
  }

  //  Obtener banco emisor
   function getIssuers(paymentMethodId) {
      window.Mercadopago.getIssuers(
          paymentMethodId,
          setIssuers
      );
   }

   function setIssuers(status, response) {
       console.log(response)
      if (status === 200) {
          let issuerSelect = document.getElementById('issuer');
          response.forEach( issuer => {
              let opt = document.createElement('option');
              opt.text = issuer.name;
              opt.value = issuer.id;
              issuerSelect.appendChild(opt);
          });

          getInstallments(
              document.getElementById('paymentMethodId').value,
              document.getElementById('transactionAmount').value,
              issuerSelect.value
          );
      } else {
          alert(`issuers method info error: ${response}`);
      }
   }

  //     Obtener cantidad de cuotas
   function getInstallments(paymentMethodId, transactionAmount, issuerId){
      window.Mercadopago.getInstallments({
          "payment_method_id": paymentMethodId,
          "amount": parseFloat(transactionAmount),
          "issuer_id": issuerId ? parseInt(issuerId) : undefined
      }, setInstallments);
   }

   function setInstallments(status, response){
      if (status === 200) {
          document.getElementById('installments').options.length = 0;
          response[0].payer_costs.forEach( payerCost => {
              let opt = document.createElement('option');
              opt.text = payerCost.recommended_message;
              opt.value = payerCost.installments;
              document.getElementById('installments').appendChild(opt);
          });
      } else {
          alert(`installments method info error: ${response}`);
      }
   }

  return (
    <div className="mt-3">
      <h3>Detalles de la tarjeta</h3>
      <hr></hr>
      <Row>
        <Col md={8}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="cardholderName">Nombre del Titular</Form.Label>
            <Form.Control
              id="cardholderName"
              data-checkout="cardholderName"
              type="text"
              placeholder="Juan Perez"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="">Vencimiento</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="MM"
                  id="cardExpirationMonth"
                  data-checkout="cardExpirationMonth"
                />
              </Col>
              <span className="date-separator">/</span>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="AA"
                  id="cardExpirationYear"
                  data-checkout="cardExpirationYear"
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="cardNumber">Numero de la tarjeta</Form.Label>
            <Form.Control
              type="text"
              id="cardNumber"
              data-checkout="cardNumber"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="securityCode">Codigo de seguridad</Form.Label>
            <Form.Control
              id="securityCode"
              data-checkout="securityCode"
              type="text"
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group id="issuerInput">
        <Form.Label htmlFor="issuer">Banco Emisor</Form.Label>
        <Form.Control as="select" type="text" id="issuer" name="issuer"  />
      </Form.Group>
      
      <Form.Group controlId="formBasicEmail">
        <Form.Label htmlFor="installments">Cuotas</Form.Label>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            as="select"
            type="text"
            id="installments"
            name="installments"
          >
            {/* <option></option> */}
          </Form.Control>
        </Form.Group>
      </Form.Group>
      <div>
        <input
          type="hidden"
          name="transactionAmount"
          id="transactionAmount"
          value="100"
        />
        <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
        <input type="hidden" name="description" id="description" />
      </div>
    </div>
  );
};

export default Tarjeta;
