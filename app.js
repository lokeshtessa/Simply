const express = require('express');

// const upload = require('express-fileupload');

const mysql = require('mysql');
const DB = require('./StudentDB')
const port =8700;
const app= express();

app.get('/', (req,res) =>{
    let std ="SELECT * FROM studentdatabase"
    DB.query(sql, function(err,results){
        if(err) throw err;
        res.send(results);
    })
})

app.get('/student/:id/results', (req,res) =>{
    res.send(DB);
})

app.get('/students?resultStatus=passed/failed',(req,res)=>{
    res.send(DB);
})

app.listen(8700 , () =>{
    console.log(`Server listening the port ${port}`);
    DB.connect( function(err){
       if(err){
        return console.log("invalid connection");
       }
       else{
        console.log("Valid Connection");
       }
    })
})