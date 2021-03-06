
/********************** REQUIREMENTS ************ */
const chalk = require("chalk");
const express = require("express");
const res = require("express/lib/response");

const app = express();
const fileUpload = require("express-fileupload");
const Joi = require("@hapi/joi");
const { id } = require("@hapi/joi/lib/base");

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
    console.log(req.params);
    const schemaUser = Joi.number().positive().integer()
    const UserValidation = schemaUser.validate(req.params.idUser)
    if(UserValidation.error) {
        console.error(chalk.red(UserValidation.error.message));
    }
    res.end();
});


//body
app.post("/users", (req,res) => {
    console.log(req.body);
    console.log(req.files);// sino hay files se puede comentar esta instrucción para evitar errores.
    res.end();
    //necesita el middleware
});




/********************** LEVANTANDO EL SERVIDOR ********** */
app.listen(3000, () => {
    console.log(chalk.green("Se ha iniciado el servidor en el puesto 3000"))
});