const { Schema, model } = require('mongoose');

/** Define el esquema o la estructura de datos que necesita Mongoose para crear sus objetos o documentos */
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        default: 0,
        min: 0
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    urlImages: {
        type: String
    },
    state: {
        type: Boolean,
        default: true  
    }
});

const ProductModel = model( 'products', ProductSchema );

module.exports = ProductModel;
