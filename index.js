require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {db} = require('./src/config/db.js');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// habilitar cors
app.use(cors({
    origin: '*'
}));

// Habilitar express.json
app.use(express.json({extended: true}))

// rutas
const router = require('./src/routes/index.js')
app.use(router);

const PORT = process.env.PORT || 3001;

const dbConnect = async () => {

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
dbConnect();

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
    db.sync({force: false}); 
})
