const models = require("../models");

exports.getHome = (req, res, next) => {
    res.render('index', {
    });
};