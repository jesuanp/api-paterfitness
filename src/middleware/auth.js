const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    // leer el token del header
    const token = req.header('x-auth-token');

    // revisar si no hay token
    if(!token){
        return res.status(401).json({msg: 'No hay token, permiso no valido'})
    }

    //validar el token
    const secret = 'secret';
    try{
        const cifrado = jwt.verify(token, secret);
        req.usuario = cifrado.usuario;

        next()
    }
    catch(err){
        console.log(err);
        res.status(401).json({msg: 'token no valido'})
    }
}