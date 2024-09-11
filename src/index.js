const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


/** Endpoints de nuestro servidor */
//http://localhost:3000/api/products
app.use( '/api/products', require( './routes/products.routes' ));


//Inciador del servidor en el puerto indicado, http://localhost:3000
app.listen(port, () => console.log(`Servidor corriendo en el puerto http://localhost:${port}`));

