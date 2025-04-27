const mysql=require('mysql');
const express=require('express');
const path=require('path');

const app=express();
app.use(express.json());

//MYSQL connection
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'saswat@123',
    database: 'myCollege'
});

db.connect((err)=>{
    if(err) throw err;
    console.log('Connected to MYSQL');

});

//serve HTML form
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'indext.html'));
});    