const express = require( 'express' );
const router = express.Router();

/** Definir las rutas */

//http://localhost:3000/api/products/
router.get('/', (req, res) => {
    res.send('<p>Lista de todos los productos<p>');
});

//http://localhost:3000/api/products/electronica
router.get('/electronica', (req, res) => {
    res.send('<p>Lista de prodcutos de electronicos<p>');
});


module.exports = router;