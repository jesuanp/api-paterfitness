const {Usuario} = require('../../config/db.js');

module.exports = async (req, res) => {

    const { id } = req.params;

    try {

        let usuario = await Usuario.findByPk(id);

        if(!usuario) return res.status(404).json({});

        return res.status(200).json(usuario);
        
    } catch (error) {
        return res.send(error);
    }

}