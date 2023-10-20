//esto lo uso en la parte de routes del index.js
const express = require('express');
const router = express.Router(); //uso el metodo para exportar las rutas

router.get('/', function (req, res) {
    res.send("prueba 1")
})


module.exports = router;

