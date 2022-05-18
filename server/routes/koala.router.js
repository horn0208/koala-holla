const express = require('express');
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
    const queryString = `INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ($1, $2, $3, $4, $5);`;
    const values = [req.body.name, 
        req.body.age, 
        req.body.gender, 
        req.body.readyForTransfer, 
        req.body.notes];
    pool.query(queryString, values).then((result)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500)
    })
})

// PUT
koalaRouter.put('/', (req, res)=>{
    console.log('/koalas PUT');
    const queryString = `UPDATE koalas SET ready_for_transfer=NOT ready_for_transfer WHERE id=$1;`;
    let values = [req.query.id];
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

// DELETE
koalaRouter.delete('/', (req, res)=>{
    console.log('/koalas DELETE');
    let queryString = `DELETE FROM koalas WHERE id=$1;`;
    let values = [req.query.id];
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = koalaRouter;