const { Router } = require('express');
const auth = require('../middleware/auth.js');

const router = Router();


const loginUsuario = require('../controllers/auth/loginUsuario.controller.js');
const usuarioAutenticado = require('../controllers/auth/getUserByToken.controller.js');

router.post('/login-usuario', loginUsuario);
router.get('/usuario-autenticado', auth, usuarioAutenticado);


module.exports = router;
