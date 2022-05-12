const express = require('express');
const { sendStatus } = require('express/lib/response');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../routes/pool');

// GET
koalaRouter.get('/', (req, res)=>{
    console.log('/koalas GET');
    const queryString = 'SELECT * FROM koalas';
    pool.query(queryString).then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        console.log('error in /koalas GET from database', err);
    })
});

// POST


// PUT


// DELETE

module.exports = koalaRouter;