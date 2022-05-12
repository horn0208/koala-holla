const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
/// array for now to test. replace w/ db connection
let koalas = [];

// GET
koalaRouter.get('/', (req, res)=>{
    console.log('/koalas GET');
    res.send(koalas);
});

// POST


// PUT


// DELETE

module.exports = koalaRouter;