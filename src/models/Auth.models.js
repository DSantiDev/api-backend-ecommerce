const { Schema, model } = require( 'mongoose' );

/** Define el esquema o la estructura de datos que necesita Mongoose para crear sus objetos o documentos */
const AuthSchema = new Schema({
    
});

/** Establecemos un vínculo entre la estructura de datos y nombre que deseamos darle a coleccion en la base de datos */
const AuthModel = model( 
    '',    
    AuthSchema
);


module.exports = AuthModel;      
