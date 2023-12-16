const { Router } = require('express');

const router = Router();

const addUsuario = require('../controllers/usuario/add.controller.js');
const deleteUsuario = require('../controllers/usuario//delete.controller.js');
const editUsuario = require('../controllers/usuario/edit.controller.js');
const getAllUsuario = require('../controllers/usuario/get.controller.js');
const getByIdUsuario = require('../controllers/usuario/getById.controller.js');

const auth = require('../middleware/auth.js');


router.post('/add-usuario', addUsuario);
router.delete('/delete-usuario/:id', auth, deleteUsuario);
router.get('/get-usuarios', getAllUsuario);
router.get('/get-usuario/:id', auth, getByIdUsuario);
router.put('/edit-usuario/:id', auth, editUsuario);


module.exports = router;
