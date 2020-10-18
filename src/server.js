// import dependencies
const express = require('express'); // when applying (declarating, assimilating '=') a function to a variable, the variable turns into a function
const path = require('path');
const pages = require('./pages.js');

// starting express (express is a library)
const server = express(); //here for example, the variable 'const express' turned into a function
server
    // use req's body
    .use(express.urlencoded({ extended: true }))
    // using static files
    .use(express.static('public'))

    // config template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // applicatio's paths
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage);

// turning on server
server.listen(5500);