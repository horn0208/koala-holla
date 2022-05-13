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
koalaRouter.post('/', (req, res)=>{
    console.log('/koalas POST');
    const queryString = `INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ($1, $2, $3, $4, $5);`
    const values = [req.body.name, 
        req.body.age, 
        req.body.gender, 
        req.body.readyForTransfer, 
        req.body.notes];
    pool.query(queryString, values).then((result)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

// PUT


// DELETE

module.exports = koalaRouter;