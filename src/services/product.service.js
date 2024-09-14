const ProductModel = require("../models/Product.model");


const dbGetProducts = async () => {
    return await ProductModel.find();
};

const dbGetProductById = async ( _id ) => {
    return await ProductModel.findOne({ _id });
};

const dbInsertProduct = async ( newProduct ) => {
    return await ProductModel.create( newProduct );
};

const dbDeleteProductById = async ( id ) => {
    return await ProductModel.findByIdAndDelete( id );
};

module.exports ={
    dbGetProducts,
    dbGetProductById,
    dbInsertProduct,
    dbDeleteProductById
};
