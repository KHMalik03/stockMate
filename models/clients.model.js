const {Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/server');

const Client /* always in singular */ = sequelize.define("clients", {
    title: DataTypes.STRING,
    /* add the other colums */
});

module.exports = Client