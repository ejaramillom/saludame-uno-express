const express = require('express');
const app = express();

app.get('/', (req, res) => {
  if (req.query.nombre === null || req.query.nombre === undefined) {
    res.send("<h1>Hola desconocido!</h1>");
  }
	else {
    res.send("<h1>Hola " + req.query.nombre + "!</h1>");
  }
	end
});

app.listen(3000, () => console.log('Listening on port 3000!'))