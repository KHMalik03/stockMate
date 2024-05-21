const express = require('express');
const router = express.Router();

const {connect,close} = require('../database/db.connection')
const {displayAllClient,deleteClientById,displayClientDataToUpdate,updateClient,displayCreationForm,createClient} = require('../controler/clients.controller') 

/* -----------------------------CRUDS------------------- */

/* setting route to SELECT all client */
router.get('/clients',displayAllClient);

/* setting routes to delete client */ 
router.get('/clients/:id/delete',deleteClientById);

/* setting route to update the client */
router.get('/clients/:id/modify',displayClientDataToUpdate);
router.post('/clients/:id/modify',updateClient);

/* setting route to CREATE a client */
router.get('/clients/create',displayCreationForm);
router.post('/clients/create',createClient);


module.exports= routeur;