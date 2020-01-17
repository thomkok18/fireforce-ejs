const models = require("../models");
const passwordHash = require('password-hash');

exports.getLogin = (req, res, next) => {
    res.render('users/login', {
    });
};

exports.postCheckUser = (req, res, next) => {
    const email = req.body.email;
    const pincode = req.body.pincode;

    models.User.findOne({ where: {email: email} }).then(user => {
        if (passwordHash.verify(pincode, user.pincode)) {
            req.session.userObject = {
                loggedIn: true,
                id: user.id,
                roleId: user.roleId
            };
            res.render('users/user-interface', {
                email: user.email,
            });
        }
    }).catch(err => {
        console.log(err);
    });
};

exports.getLogout = (req, res, next) => {
    req.session.userObject = null;
    res.render('users/login', {
    });
};

exports.getRegister = (req, res, next) => {
    res.render('users/register', {
    });
};

exports.postStoreUser = (req, res, next) => {
    const firstname = req.body.firstname;
    const inserts = req.body.inserts;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const tel = req.body.tel;
    const pincode = passwordHash.generate(req.body.pincode);

    models.User.create({
        roleId: 2,
        firstname: firstname,
        inserts: inserts,
        lastname: lastname,
        email: email,
        tel: tel,
        pincode: pincode,
    }).then(result => {
        console.log('Gebruiker aangemaakt');
    }).catch(err => {
        console.log(err);
    });
    return res.redirect('/login');
};

exports.getUserInterface = (req, res, next) => {
    res.render('users/user-interface', {
    });
};