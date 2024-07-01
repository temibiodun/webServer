const http = require ("http");
const express = require("express");
const fs = require ("fs");
const host =  "localhost";
const port = 3087
const app = express();

app.get('/ipv4', (req, res)=>{



    const ipAddress = req.ip;
    return res.json({message: 'hello world!YOUR IP ADDRESS IS: ${ipAddress}'});

    

    

});

app.listen(3087, ()=>{
    console.log(`server is running on http://${host}:${port}`)
})


