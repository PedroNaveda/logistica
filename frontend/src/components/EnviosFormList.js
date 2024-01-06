import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnviosFormList = () => {
  const [envios, setEnvios] = useState([]);
  const [nuevoEnvio, setNuevoEnvio] = useState({
    destinatario: '',
    remitente: '',
    contenido: '',
    fecha_envio: '',
    distancia: 0,
  });

  const fetchEnvios = async () => {
    try {
      const response = await axios.get('http://localhost:3001/envios');
      setEnvios(response.data);
    } catch (error) {
      console.error('Error fetching envios:', error);
    }
  };

  useEffect(() => {
    fetchEnvios();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/envios', nuevoEnvio);
      setNuevoEnvio({
        destinatario: '',
        remitente: '',
        contenido: '',
        fecha_envio: '',
        distancia: 0,
      });
      fetchEnvios(); 
    } catch (error) {
      console.error('Error creating envio:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input fields for nuevoEnvio */}
        {/* ... */}
        <button type="submit">Crear Envío</button>
      </form>
      <ul>
        {envios.map((envio) => (
          <li key={envio.id}>
            {/* Display envio details */}
            {/* ... */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnviosFormList;