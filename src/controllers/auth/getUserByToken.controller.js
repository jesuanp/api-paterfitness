const {Usuario} = require('../../config/db.js');

module.exports = async (req, res) => {

    const userId = req.usuario.id;

    try {

        const user = await Usuario.findByPk(userId)

        delete user.dataValues.password;
        
        return res.json(user);
    } catch (error) {
        console.log(error);
    }

}
