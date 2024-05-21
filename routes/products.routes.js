const express = require('express');
const router = express.Router();

const {displayAllProducts,deleteProduct,displayProductDataToUpdate,updateProduct,displayProductCreationForm,createProduct} = require('../controler/products.controller') 

/* -----------------------------CRUDS------------------- */

/* setting route to SELECT all client */
router.get('/products',displayAllProducts);

/* setting routes to delete client */ 
router.get('/products/:id/delete',deleteProduct);

/* setting route to update the client */
router.get('/products/:id/modify',displayProductDataToUpdate);
router.post('/products/:id/modify',updateProduct);

/* setting route to CREATE a client */
router.get('/products/create',displayProductCreationForm);
router.post('/products/create',createProduct)


module.exports= routeur;