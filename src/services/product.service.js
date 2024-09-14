const ProductModel = require("../models/Product.model");


const dbInsertProduct = async ( newProduct ) => {
    return await ProductModel.create( newProduct );
};

module.exports ={
    dbInsertProduct
};