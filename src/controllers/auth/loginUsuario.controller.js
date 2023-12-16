const {Usuario} = require('../../config/db.js');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {

    const {email, password} = req.body;

    try {

        let usuario = await Usuario.findOne({
            where: {
                email: email
            }
        })

        if(!usuario){
            return res.status(400).json({msg: 'El usuario no existe'})
        }

        if(password !== usuario.password){
            return res.status(400).json({msg: 'El password es incorrecto'})
        }

        // Crear y firmar el jwt
        const payload = {
            usuario: {
                id: usuario.id,
                name: usuario.name
            }
        };

        // firmar el jwt
        jwt.sign(payload, 'secret', {
            expiresIn: 36000
        }, (err, token) => {
            if(err) throw err;

            res.json({token});
        })
        
    } catch (error) {
        return res.send(error)
    }

}