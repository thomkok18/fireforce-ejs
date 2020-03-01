function auth(req, res) {
    if (!req.session.userObject) {
        return res.render('users/login', {});
    }
}

function adminAuth(req, res) {
    auth(req, res);

    if (req.session.userObject.roleId !== 1) {
        return res.render('notifications/index', {});
    }
}

module.exports = {auth, adminAuth};