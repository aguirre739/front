import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Formulario from './components/Formulario';

function App() {

  const obtenerKey = () => {
    window.Mercadopago.setPublishableKey("TEST-84111877-ad71-4d72-82e5-4a5f6645f104");
  }

  obtenerKey();
  return (
    <div className="container my-5 d-flex justify-content-center">
      <Formulario></Formulario>
    </div>
  );
}

export default App;
