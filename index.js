require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor express
const app = express();

// Configurar los cors 
app.use(cors());
// Base de datos 

dbConnection();


// user_name: nachowski
// passwrod: NzNnheIyIzUfwcPW
//JWT_SECRET=affF00234sT56ySdFFcSDwe2349902

//GOOGLE_ID=399475211095-qt265j3hitt1tv1ofp2r1torqle7ko05.apps.googleusercontent.com
//GOOGLE_SECRET=s37aZej2iLdC3x3qsGOUPobp

// Rutas 
app.get('/',  (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});



app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ', 3000);
});