const {auth, adminAuth} = require("../helpers/auth");
const models = require("../models");

exports.getNotification = async (req, res, next) => {
    auth(req, res);

    const locations = await models.Location.findAll();
    const notifications = await models.Notification.findAll();

    return res.render('notifications/index', {
        notifications: notifications,
        locations: locations
    });
};

exports.getCreateNotification = (req, res, next) => {
    auth(req, res);

    models.Location.findAll().then(locations => {
        return res.render('notifications/create', {
            locations: locations
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.postNotification = (req, res, next) => {
    auth(req, res);

    const what = req.body.what;
    const where = req.body.location;
    const who = req.body.who;
    const tel = req.body.tel;
    const place = req.body.place;

    models.Notification.create({
        what: what,
        location: where,
        who: who,
        tel: tel,
        locationId: place,
    }).then(result => {
        console.log('Melding aangemaakt');
    }).catch(err => {
        console.log(err);
    });
    return res.redirect('/notification');
};