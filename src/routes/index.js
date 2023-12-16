const {Router} = require('express');

const router = Router();

const routerUsuario = require('./usuario.js');
const routerAuth = require('./auth.js');

router.use('/', routerUsuario)
router.use('/', routerAuth)

module.exports = router;
