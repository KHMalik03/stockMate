const express = require('express');
const router = express.Router();

const {connect,close}=require('../database/db.connection');

/* ---------------------CRUNDS functions----------------------- */

/* SELECT all */
const displayAllProducts = async (req, res) => {
    let db = await connect();
    let product = await seletcAllProducts;
    close();
    res.render('products',{product})
};

/* DELETE Product by ID */ 
const deleteProduct = async (req, res) => {
    let productId = req.params.id;
    let db = await connect();
    let product = await deletWhereIdIsEqualToProductsId;
    close();

    res.redirect('/products')
};

/* UPDATE Product */
const displayProductDataToUpdate = async (req,res) =>{
    let productId = req.params.id;
    let db = await connect();
    let product = await selectWhereIdIsEqualToProductId;
    close();

    res.render('modify-product',{product})
};

const updateProduct = async (req,res) =>{
    let productId = req.params.id;
    let db = await connect();
    let product = await updateWhereIdIsEqualToProductId;
    close();
};

/* setting route to CREATE a Product */
const displayProductCreationForm = async (req,res) =>{
    res.render('create-product');
};

const createProduct = async (req,res) =>{
    let db = await connect();
    let product = await createProductRequest;
    close();

    res.redirect('/products')
};

module.exports = {
    displayAllProducts, 
    deleteProduct, 
    displayProductDataToUpdate, 
    updateProduct, 
    displayProductCreationForm, 
    createProduct
};




