const express = require( 'express' );
const app = express();

const dbConection = require('./config/mongo.config');



dbConection()

// http://localhost:3000/api/products
app.use( '/api/products', require( './routes/product.routes' ) );

app.listen( 3000, function() {
    console.log( 'Servidor corriendo en puerto 3000' );
});