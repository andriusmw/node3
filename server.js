
/********************** REQUIREMENTS ************ */
const chalk = require("chalk");
const express = require("express");
const res = require("express/lib/response");

const app = express();
const fileUpload = require("express-fileupload");

/***********************  MIDDLEWARES ******** */

app.use(express.json());
//Parsea las peticiones post para leer los bodys
//en formato json

app.use(express.urlencoded({extended: true}));
//para poder recibir peticiones urlencoded

app.use(fileUpload());
//cuando hacemos un post formdata coge los ficheros y
//los serive en req.files y resto de datos en req.body


/*********************** RUTAS ************** */


//query.string
app.get("/search", (req,res) => {
    console.log(req.query);
    res.end();
});


//params
app.get("/users/:idUser", (req,res) => {
    console.log(req.params)
    res.end();
});


//body
app.post("/users", (req,res) => {
    console.log(req.body);
    console.log(req.files);
    res.end();
    //necesita el middleware
});




/********************** LEVANTANDO EL SERVIDOR ********** */
app.listen(3000, () => {
    console.log(chalk.green("Se ha iniciado el servidor en el puesto 3000"))
});