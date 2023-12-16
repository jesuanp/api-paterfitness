const { Sequelize } = require('sequelize');

const DB_HOST = 'localhost:5432';
const DB_DATABASE = 'paterfitness';
const DB_USER = 'postgres';
const DB_PASSWORD = 'password';

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
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
