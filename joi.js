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

/******************************************************* VALIDACIONES ************************************************************* */

/*********** STRINGS ************************************************************************************ */

//const schema = Joi.string()
//restriccion dato string
const schemaString = Joi.string().min(4).max(20);
//require string de entre 4 y 20 characters

const validationString = schemaString.validate(null)

if(validationString.error) {
    console.error(validationString);
    //Muestra el error si lo hay
}

/*  Para strings-------------------------------
.string()
        .uri()  .email()  .creditCard()  .require()
        .lowercase() .upppercase() .lenght()
----------------------------------------------
*/

/* ************** NÚMEROS  **********************************************************************************/

const schemaNumber = Joi.number()

const validationNumber = schemaNumber.validate("421")

if(validationNumber.error) {
    console.error(validationNumber);
    //Muestra el error si lo hay
}
/*
-----------------------------------
    .min()  .max()  .positive()  .negative()
    .integer() .precision(2)
                // precison 2 decimales 

-----------------------------------

*/

/* ************** FECHAS  **********************************************************************************/

const schemaDate = Joi.date()

const validationDate = schemaDate.validate("12")

if(validationDate.error) {
    console.error(validationDate);
}

/* -------------------------------------
    .min("aaaa-mm-dd") .max()  .timestamp()
                                //solo admite fecha formato unix
    
----------------------------------------*/