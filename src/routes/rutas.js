const express = require("express");
const {UsuarioController, UsuarioController2} = require("../controllers/UsuariosControllers");

const router = express.Router();

// Pass the function reference, not the result of its invocation
router.get("/base1", UsuarioController);
router.get("/base2", UsuarioController2);

module.exports = router;
