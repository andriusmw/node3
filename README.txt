# modulos
	npm install chalk@4.1.2
	npm install express-fileupload


# comandos para las peticiones al servidor

 -query.string (método GET)
	localhost:3000/search?marca=mazda&price=9000
 -params (get)
	localhost:3000/users/3
 -body (post) (usando postman, abajo el objeto, body>raw>json)
	localhost:3000/users
	
	{
    		"name": "Perico",
    		"age": 34
         }

