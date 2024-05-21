const {Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/server');

const Cart /* always in singular */ = sequelize.define("carts", {
    title: DataTypes.STRING,
    /* add the other colums */
})