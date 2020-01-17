const express = require('express');
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const notificationController = require("../controllers/notificationController");

const router = express.Router();

// Home
router.get('/', homeController.getHome);

// login / register
router.get('/login', userController.getLogin);
router.post('/login', userController.postCheckUser);
router.get('/logout', userController.getLogout);
router.get('/register', userController.getRegister);
router.post('/register', userController.postStoreUser);

// ingelogd
router.get('/user-interface', userController.getUserInterface);

// notification
router.get('/notification', notificationController.getNotification);
router.get('/notification/create', notificationController.getCreateNotification);
router.post('/notification', notificationController.postNotification);

module.exports = router;