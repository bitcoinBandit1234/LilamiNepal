const router = require("express").Router()
const {registerUser, loginUser, isAuthenticated} = require('../controller/auth_controller')
const validate = require("../helper/validation.js");
const addAuction = require("../controller/auction_controller.js");
const upload = require("../helper/photoUploader.js")

router.post('/register',validate ,registerUser);
router.route("/login").get(isAuthenticated).post(loginUser);
router.post("/addAuction", upload.single("image"), addAuction);

module.exports = router;