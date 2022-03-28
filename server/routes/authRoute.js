const router = require("express").Router()
const {registerUser, loginUser, isAuthenticated} = require('../controller/auth_controller')


router.post('/register', registerUser);
router.route("/login").get(isAuthenticated).post(loginUser);

module.exports = router;