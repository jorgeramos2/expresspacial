/*const http = require('http');

const server = http.createServer((req,res)=>{
    res.status=200;
    res.setHeader('Content-Type','text/plain');
    res("Hola Mundo");
})

server.listen(3000,()=>{
    console.log("Server on port 3000");
})*/

///  node .\server.js
/// npm init -y 
/// npm i express 
/// npm i nodemon
/// npm run dev 

const express = require('express');

const app = express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("You are on the homepage");
})

app.post("/post",(req,res)=>{
    res.send(` Welcome ${req.body.user} `);
})
app.put("/put/:ID",(req,res)=>{
    res.send(` Task ${req.params.ID} has been updated`);
})
app.delete("/delete",(req,res)=>{
    
    res.json({
        delete : true 
    })
})

app.listen(5000,() => {
console.log("Server on port 5000");
})
