const bodyParser = require('body-parser');
const express = require('express');

const path = require('path');
const routes = require('./routes/web');
const session = require('express-session');

// database
const sequelize = require('./utils/database');

const app = express();

const config = require("./config/app.json");

global.prefix = config.environment === "dev" ? "" : "/~thom/fireforce/42";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded(
    {extended: false}
));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.use(function(req, res, next) {
    res.locals.userObject = req.session.userObject;
    next();
});

app.use(`${prefix}` + '/', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404 pagina niet gevonden.'
    });
});

sequelize.sync().then(result => {
    // Port number
    app.listen(3000);
}).catch(err => {
    console.log(err);
});