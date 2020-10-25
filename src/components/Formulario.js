import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Comprador from "./Comprador";
import Tarjeta from "./Tarjeta";

const Formulario = () => {
  let doSubmit = false;
  
  document
    .getElementById("paymentForm")
    
  function getCardToken(event) {
    event.preventDefault();
    if (!doSubmit) {
      let $form = document.getElementById("paymentForm");
      window.Mercadopago.createToken($form, setCardTokenAndPay);
      return false;
    }
  }

  function setCardTokenAndPay(status, response) {
      console.log(response)
    if (status === 200 || status === 201) {
      let form = document.getElementById("paymentForm");
      let card = document.createElement("input");
      card.setAttribute("name", "token");
      card.setAttribute("type", "hidden");
      card.setAttribute("value", response.id);
      form.appendChild(card);
      doSubmit = true;
      form.submit();
    } else {
      alert("Verify filled data!\n" + JSON.stringify(response, null, 4));
    }
  }
  return (
    <Card className="w-50 shadow">
      <Card.Body>
        <Form action="/process_payment" method="post" id="paymentForm" onSubmit={getCardToken}>
          <Comprador></Comprador>
          <Tarjeta></Tarjeta>
          <div>
            <Button
              variant="success"
              type="submit"
              className="btn btn-block shadow"
            >
              Pagar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Formulario;
