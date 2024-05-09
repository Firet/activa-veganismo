const express = require('express');
const app = express();
const path = require('path');

// Define la ruta para el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Otras rutas
// app.get('/otra-ruta', (req, res) => { ... });

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
