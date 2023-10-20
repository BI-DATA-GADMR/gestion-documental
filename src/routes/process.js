//esto lo uso en la parte de routes del index.js
const express = require('express');
const router = express.Router(); //uso el metodo para exportar las rutas
const pool = require('../database'); //conexion a la base de datos

router.get('/add', function (req, res) {
    res.render('processes/add')
})

module.exports = router;