const {Usuario} = require('../../config/db.js');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {

    const { email, password, name } = req.body;

    // let fecha = new Date().toLocaleString('en-US', {timeZone: 'America/Caracas'})

    try {

        let usuarioExist = await Usuario.findOne({
            where: {
                email: email
            }
        });

        if(usuarioExist) return res.status(404).json({msg: 'Ya hay una cuenta con este email'})

        let newUsuario = await Usuario.create({
            email,
            password,
            name
        });

        // Crear y firmar el jwt
        const payload = {
            usuario: {
                id: newUsuario.id,
                name: newUsuario.name
            }
        };

        // firmar el jwt
        jwt.sign(payload, 'secret', {
            expiresIn: 36000
        }, (err, token) => {
            if(err) throw err;
            console.log('token')
            res.json({token});
        })
        
    } catch (error) {
        return res.send(error)
    }

}