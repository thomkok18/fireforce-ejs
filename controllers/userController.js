const {auth, adminAuth} = require("../helpers/auth");
const models = require("../models");
const passwordHash = require('password-hash');

exports.getLogin = (req, res, next) => {
    return res.render('users/login', {});
};

exports.postCheckUser = (req, res, next) => {
    const email = req.body.email;
    const pincode = req.body.pincode;

    models.User.findOne({ where: {email: email} }).then(user => {
        if (!user) {
            return res.render('users/login', {
                error: "Email en/of pincode klopt niet.",
            });
        } else if (!email || !pincode) {
            return res.render('users/login', {
                error: "Vul alle gegevens in."
            });
        }

        if (passwordHash.verify(pincode, user.pincode)) {
            req.session.userObject = {
                loggedIn: true,
                id: user.id,
                firstname: user.firstname,
                inserts: user.inserts,
                lastname: user.lastname,
                email: user.email,
                tel: user.tel,
                roleId: user.roleId
            };
            return res.redirect('/user-interface');
        }
    }).catch(err => {
        console.log(err);
    });
};

exports.getLogout = (req, res, next) => {
    req.session.userObject = null;
    return res.redirect('/login');
};

exports.getRegister = (req, res, next) => {
    return res.render('users/register', {});
};

exports.postStoreUser = (req, res, next) => {
    const firstname = req.body.firstname;
    const inserts = req.body.inserts;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const tel = req.body.tel;
    const pincode = passwordHash.generate(req.body.pincode);

    if (!firstname || !lastname || !email || !tel || !pincode) {
        return res.render('users/register', {
            error: "Je hebt niet alle verplichte gegevens ingevoerd.",
        });
    }

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
    auth(req, res);
    return res.render('users/user-interface', {
        email: req.session.userObject.email,
    });
};

exports.getAdminInterface = (req, res, next) => {
    adminAuth(req, res);
    return res.render('admin/index', {});
};