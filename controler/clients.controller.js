const Client = require('../models/clients.model')

/* ---------------------CRUNDS functions----------------------- */

/* SELECT all */
const displayAllClient = async (req,res)=>{
    const client = await Client.findAll();;
    res.render('users',{client})
};

/* DELETE client by ID */ 
const deleteClientById = async (req,res)=>{
    let clientId = req.params.id;
    let client = await Client.destroy({
        where : {
            id : clientId
        }
    });

    res.redirect('/clients');
};

/* UPDATE client */
const displayClientDataToUpdate = async (req,res)=>{
    let clientId = req.params.id;
    const client = await Client.findAll({
        where :{
            id : clientId
        }
    });

    res.render('modify-client',{client})
};

const updateClient = async (req,res)=>{
    let clientId = req.params.id;
    const {inputNamesInForm} = req.body /* req.body to retreive input data from the form */;
    const client = await Client.update({
            columnName: inputNamesInForm,
            /* add other columns */
        },
        {where :{id : clientId} });
};


/* setting route to CREATE a client */
const displayCreationForm = async (req,res)=>{
    res.render('create-client');
};
const createClient = async (req,res)=>{
    const {inputNameInForm} = req.body /* req.body to retreive input data from the form */
    let client = await Client.create({
        columnName: inputNameInForm,
        /* add other columns */
    });

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




