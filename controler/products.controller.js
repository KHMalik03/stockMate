const express = require('express');
const router = express.Router();

const {connect,close}=require('../database/db.connection')

/* ---------------------CRUNDS functions----------------------- */

/* SELECT all */
let displayAllProducts;
exports.displayAllProducts = async (req, res) => {
    let db = await connect();
    let product = await seletcAllProducts;
    close();
    res.render('products',{product})
};

/* DELETE Product by ID */ 
let deleteProduct;
exports.deleteProduct = async (req, res) => {
    let productId = req.params.id;
    let db = await connect();
    let product = await deletWhereIdIsEqualToProductsId;
    close();

    res.redirect('/products')
};

/* UPDATE Product */
let displayProductDataToUpdate;
exports.displayProductDataToUpdate = async (req,res) =>{
    let productId = req.params.id;
    let db = await connect();
    let product = await selectWhereIdIsEqualToProductId;
    close();

    res.render('modify-product',{product})
};

let updateProduct;
exports.updateProduct = async (req,res) =>{
    let productId = req.params.id;
    let db = await connect();
    let product = await updateWhereIdIsEqualToProductId;
    close();
}

/* setting route to CREATE a Product */
let displayProductCreationForm;
exports.displayProductCreationForm = async (req,res) =>{
    res.render('create-product');
}

let createProduct;
exports.createProduct = async (req,res) =>{
    let db = await connect();
    let product = await createProductRequest;
    close();

    res.redirect('/products')
}




