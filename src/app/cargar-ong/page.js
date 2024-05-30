'use client';

import React, { useState } from 'react';
import './cargar-ong.css'; // Archivo de estilos

export default function CargarONG() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a un servidor o API
    const data = {
      nombre,
      descripcion,
      email,
      telefono,
    };
    console.log(data);
    alert('Datos enviados: ' + JSON.stringify(data, null, 2));
    // Aquí podrías realizar una solicitud fetch o axios para enviar los datos a tu servidor
  };

  return (
    <div className="cargar-ong-container">
      <h1>Carga tu ONG</h1>
      <form onSubmit={handleSubmit} className="cargar-ong-form">
        <div className="form-group">
          <label>Nombre de la ONG</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email de contacto</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Teléfono de contacto</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
}


