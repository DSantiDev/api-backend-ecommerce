const express = require( 'express' );
const dbConection = require('./config/mongo.config');
const app = express();

/** Establecer la conexion a MongoDB usando la config */

dbConection()

/** EndPoints de nuestro servidor */

// http://localhost:3000/api/products
app.use( '/api/products', require( './routes/product.routes' ) );


/** Lanzamos el servidor en puerto indicado 
 * http://localhost:3000
*/
app.listen( 3000, function() {
    console.log( 'Servidor corriendo en puerto 3000' );
});