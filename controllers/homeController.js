const models = require("../models");

exports.getHome = (req, res, next) => {
    return res.render('index', {});
};