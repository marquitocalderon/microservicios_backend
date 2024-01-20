const express = require('express');
const rutas = require('../backend/src/routes/rutas');

const app = express();
const port = process.env.PORT || 3000;

app.use(rutas)



app.listen(port, () => {
    console.log(`Servidor principal escuchando en el puerto ${port}`);
  });