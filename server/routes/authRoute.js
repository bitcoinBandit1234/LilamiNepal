const router = require("express").Router()
const {registerUser, loginUser, isAuthenticated} = require('../controller/auth_controller')
const validate = require("../helper/validation.js");

router.post('/register',validate ,registerUser);
router.route("/login").get(isAuthenticated).post(loginUser);

module.exports = router;