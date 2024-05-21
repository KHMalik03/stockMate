const express = require('express');

const {connect,close}=require('../database/db.connection');

/* ---------------------CRUNDS functions----------------------- */

/* SELECT all */
const displayAllClient = async (req,res)=>{
    let db = await connect ();
    let client = await seletcAllClients;
    close();
    res.render('users',{client})
};

/* DELETE client by ID */ 
const deleteClientById = async (req,res)=>{
    let clientId = req.params.id;
    let db = await connect();
    let client = await deletWhereIdIsEqualToCLientId;
    close();

    res.redirect('/clients');
};

/* UPDATE client */
const displayClientDataToUpdate = async (req,res)=>{
    let clientId = req.params.id;
    let db = await connect();
    let client = await selectWhereIdIsEqualToClientId;
    close();

    res.render('modify-client',{client})
};

const updateClient = async (req,res)=>{
    let clientId = req.params.id;
    let db = await connect();
    let client = await updateWhereIdIsEqualToClientId /* req.body to retreive input data from the form */;
    close();


};


/* setting route to CREATE a client */
const displayCreationForm = async (req,res)=>{
    res.render('create-client');
};
const createClient = async (req,res)=>{
    let db = await connect();
    let client = await createClientRequest;
    close();

    res.redirect('/clients')
};

module.exports = {
    displayAllClient,
    deleteClientById,
    displayClientDataToUpdate,
    updateClient,
    displayCreationForm,
    createClient
};




