const {Usuario} = require('../../config/db.js');

module.exports = async (req, res) => {

    const {id} = req.params;
    const editUsuario = req.body;

    try {

        let usuario = await Usuario.findByPk(id);

        for (const property in editUsuario) {

            usuario[property] = editUsuario[property]
        }

        usuario.save();

        delete user.dataValues.password;

        return res.status(200).json(usuario);
        
    } catch (error) {
        return res.send(error)
    }

}