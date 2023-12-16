const { Sequelize } = require('sequelize');
require('dotenv').config()

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DATABASE = process.env.DATABASE || 'registrocuentas';

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const usuarioModel = require('../models/usuario.js');

usuarioModel(sequelize);

const {usuario} = sequelize.models;

module.exports = {
    db: sequelize,
    Usuario: usuario
}
