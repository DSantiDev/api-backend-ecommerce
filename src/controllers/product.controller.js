const { dbInsertProduct, dbGetProducts, dbGetProductById, dbDeleteProductById, dbUptadeProductById } = require('../services/product.service');


// Muestra todos los productos registrados
async function getProducts( req, res ) {

    try {
        const data = await dbGetProducts();
        res.status(226).json({
            ok: true,
            data
        });
    } catch (error) {
        console.error( error );
        res.status(501).json({
            ok: false,
            msg: 'Error al obtener todos los productos',
        });
    }

    
}

async function getProductById( req, res ) {
    const productId = req.params.id;

   try {
        const data = await dbGetProductById( productId );    
        
        if( ! data ){
            res.status( 404 ).json({
                ok: false,
                msg: 'Producto no econtrado'
            });
        }

        res.status(226).json({
            ok: true,
            data           
        });
    } catch (error) {
        console.error( error );
        res.status(501).json({
            ok: false,
            msg: 'Error al obtener un producto por ID',
        });
    }
}

async function createProduct( req, res ) {
    const inputData = req.body;

    try {
        const data = await dbInsertProduct( inputData );

        res.status(201).json({
            ok: true,
            data            // ECMAScript data: data ---> data
        });
    } catch (error) {
        console.error( error );
        res.status(500).json({
            ok: false,
            msg: 'Error al crear un producto',
        });
    }
    
}

function updateProductPut( req, res ) {
   
    
    res.json({
        ok: true,
        msg: 'Actualiza todos los campos del producto'
    });
}

async function updateProductPatch( req, res ) {
    const productId = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUptadeProductById( productId, inputData );          

        res.status(201).json({
            ok: true,
            data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar un producto por ID',
        });
    }
    
}

async function deleteProduct( req, res ) {
    const productId = req.params.id;


    try {
         const data = await dbDeleteProductById( productId );          
 
         res.status(200).json({
            ok: true,
            data
        });
     } catch ( error ) {
         console.error( error );
         res.status(500).json({
             ok: false,
             msg: 'Error al eliminar un producto por ID',
         });
     }
   
}


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProductPut,
    updateProductPatch,
    deleteProduct
}