const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const {mongoose} = require('./database');

const app = express();

//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(bodyParser.json());

//Routes
app.use('/api/trips',require('./routes/trips.routes.js'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Starting Server
app.listen(app.get('port'), () => {
    console.log(`Server inited on port ${app.get('port')}`);
})