const models = require("../models");

exports.getNotification = (req, res, next) => {
    models.Location.findAll().then(locations => {
        models.Notification.findAll().then(notifications => {
            console.log(notifications);
            res.render('notifications/index', {
                notifications: notifications,
                locations: locations
            });
        }).catch(err => {
            console.log(err);
        });
    });
};

exports.getCreateNotification = (req, res, next) => {
    models.Location.findAll().then(locations => {
        console.log(locations);
        res.render('notifications/create', {
            locations: locations
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.postNotification = (req, res, next) => {
    const what = req.body.what;
    const where = req.body.where;
    const who = req.body.who;
    const tel = req.body.tel;
    const place = req.body.place;

    models.Notification.create({
        what: what,
        where: where,
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