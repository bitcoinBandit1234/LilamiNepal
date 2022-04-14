const router = require("express").Router()
const {registerUser, loginUser, isAuthenticated, logoutUser} = require('../controller/auth_controller')
const validate = require("../helper/validation.js");
const upload = require("../helper/photoUploader.js")

router.post('/register',validate ,registerUser);
router.route('/login').get(isAuthenticated).post(loginUser);
router.get('/logout', logoutUser);

module.exports = router;