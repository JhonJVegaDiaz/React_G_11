// Importar Express
const express = require('express');
// Crear el enrutador principal para en Routing, usar el metodo Router e express
const router = express.Router();
// Importar modelo de datos productSchema
const productSchema = require('../models/productModel');

// Crear los endpoints/rutas para la API que tenga los metodos HTTP (CRUD)
// Crear función para crear un producto nuevo (POST)
router.post('/products', (req, res) => {
    const product = productSchema(req.body);
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => console.error({ message: error }))
});