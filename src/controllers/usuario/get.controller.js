const {Usuario} = require('../../config/db.js');

module.exports = async (req, res) => {

    try {

        let usuarios = await Usuario.findAll();

        return res.status(200).json(usuarios);
        
    } catch (error) {
        return res.send(error)
    }

}