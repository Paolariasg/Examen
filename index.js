const express = require('express');
const http = require('http');
const app = express()

/* -------------
    PARAMS 
----------------*/
//Petición de un dato
// app.get('/:user',(req, res)=>{
//     res.send(`Usuario: ${req.params.user}`);
// });

//Petición de dos datos
// app.get('/:name/:lastname',(req, res)=>{
//     res.send(`Nombre: ${req.params.name} Apellido: ${req.params.lastname}`);
// });


/* -------------
    QUERY
----------------*/
//Petición de un dato
// app.get('/home',(req, res)=>{
//     res.send(`Mes: ${req.query.mes}`);
// });

//Petición de dos datos
// app.get('/home',(req, res)=>{
//     res.send(`Fruta: ${req.query.fruta} Bebida: ${req.query.bebida}`);
// });


/* -------------
    BODY
----------------*/

//Body json
// app.use(express.json())
// app.get('/home',(req, res)=>{
//     res.send(`Nombre: ${req.body.nombre}`);
// });

//Body text
// app.use(express.text())
// app.get('/home',(req, res)=>{
//     res.send(`Hola ${req.body}`);
// });

//Body Form
// app.use(express.urlencoded ({extended:false}))
// app.get('/home',(req, res)=>{
//     res.send(`Nombre: ${req.body.nombre}`);
// });


app.listen(8000,"localhost",()=>{
    console.log('http://localhost:8000/')
})