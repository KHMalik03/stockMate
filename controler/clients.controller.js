const express = require('express');
const router = express.Router();

const {connect,close}=require('../database/db.connection')

/* ---------------------CRUNDS functions----------------------- */

/* SELECT all */
let displayAllClient
exports.displayAllClient = async (req,res)=>{
    let db = await connect ();
    let client = await seletcAllClients;
    close();
    res.render('users',{client})
};

/* DELETE client by ID */ 
let deleteClientById;
exports.deleteClientById = async (req,res)=>{
    let clientId = req.params.id;
    let db = await connect();
    let client = await deletWhereIdIsEqualToCLientId;
    close();

    res.redirect('/clients');
}

/* UPDATE client */
let displayClientDataToUpdate;
exports.displayClientDataToUpdate = async (req,res)=>{
    let clientId = req.params.id;
    let db = await connect();
    let client = await selectWhereIdIsEqualToClientId;
    close();

    res.render('modify-client',{client})
}

let updateClient;
exports.updateClient = async (req,res)=>{
    let clientId = req.params.id;
    let db = await connect();
    let client = await updateWhereIdIsEqualToClientId /* req.body to retreive input data from the form */;
    close();


}


/* setting route to CREATE a client */
let displayCreationForm;
exports.displayCreationForm = async (req,res)=>{
    res.render('create-client');
}
let createClient;
exports.createClient = async (req,res)=>{
    let db = await connect();
    let client = await createClientRequest;
    close();

    res.redirect('/clients')
}




