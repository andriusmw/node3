
/********************** REQUIREMENTS ************ */
const chalk = require("chalk");
const express = require("express");
const res = require("express/lib/response");

const app = express();

/*********************** RUTAS ************** */

app.get("/search", (req,res) => {
    console.log(req.query);
    res.end();
});

/********************** LEVANTANDO EL SERVIDOR ********** */
app.listen(3000, () => {
    console.log(chalk.green("Se ha iniciado el servidor en el puesto 3000"))
});