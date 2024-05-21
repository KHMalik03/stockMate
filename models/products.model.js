const {Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/server');

const Product /* always in lowercase */ = sequelize.define("products", {
    title: DataTypes.STRING,
    /* add the other colums */
})

module.exports = Product