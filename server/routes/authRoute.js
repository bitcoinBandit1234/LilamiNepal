const router = require("express").Router()
const {registerUser, loginUser, isAuthenticated} = require('../controller/auth_controller')
const validate = require("../helper/validation.js");
const  {addAuction, getAuctionItems, extractAuctionDetail}  = require("../controller/auction_controller.js");
const upload = require("../helper/photoUploader.js")

router.post('/register',validate ,registerUser);
router.route("/login").get(isAuthenticated).post(loginUser);
router.route("/addAuction").get(getAuctionItems).post(upload.single("image"), addAuction);
router.get('/product/productDetail/:id', extractAuctionDetail);
module.exports = router;