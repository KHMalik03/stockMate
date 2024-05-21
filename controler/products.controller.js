const Product = require('../models/products.model');

/* ---------------------CRUNDS functions----------------------- */

/* SELECT all */
const displayAllProducts = async (req, res) => {
    const product = await Product.findAll();
    res.render('products',{product})
};

/* DELETE Product by ID */ 
const deleteProduct = async (req, res) => {
    let productId = req.params.id;
    const product = await Product.destroy({
        where: { id: productId }
    });

    res.redirect('/products')
};

/* UPDATE Product */
const displayProductDataToUpdate = async (req,res) =>{
    let productId = req.params.id;
    const product = await Product.findAll({
        where : {id : productId}
    },
);
    res.render('modify-product',{product})
};

const updateProduct = async (req,res) =>{
    let productId = req.params.id;
    const {inputNameInForm} = req.body /* req.body to retreive input data from the form */
    const product = await Product.update({
        columnName : inputNameInForm,
                    /* add other columns */
    },{
        where : {id : productId}
    });
};

/* setting route to CREATE a Product */
const displayProductCreationForm = async (req,res) =>{
    res.render('create-product');
};

const createProduct = async (req,res) =>{
    const {inputNameInForm} = req.body /* req.body to retreive input data from the form */ 
    const product = await Product.create({
        columnName : inputNameInForm
            /* add other columns */
    });

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




