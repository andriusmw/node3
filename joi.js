const Joi = require("@hapi/Joi");


/*****************  EJEMPLO ******************* */
/*
const schema = Joi.any()
//crea un squema que permite dato de cualquier tipo


const validation = schema.validate("Pepe")
//valida si la string pepe encaja con el schema que le hemos puesto
//en este caso, any() permite cualquier dato, así que sí encaja.

if(validation.error) {
    console.error(validation);
    //Muestra el error si lo hay
}*/

/****************************VALIDACIONES ***************** */

const schema = Joi.string()
//restriccion dato string


const validation = schema.validate(null)

if(validation.error) {
    console.error(validation);
    //Muestra el error si lo hay
}