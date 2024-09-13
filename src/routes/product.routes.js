const express = require( 'express' );
const router = express.Router();

const { getProducts, createProduct, updateProductPut, updateProductPatch, deleteProduct } = require('../controllers/product.controller');


router.get( '/', getProducts );              
router.post( '/', createProduct  );         
router.put( '/', updateProductPut );         
router.patch( '/', updateProductPatch );     
router.delete( '/', deleteProduct );    


module.exports = router;