const router = require("express").Router();
const {isAuthenticated} = require('../controller/auth_controller');
const {extractAuctionDetail} = require('../controller/auction_controller');

router.get('/productDetail/:id', extractAuctionDetail);

module.exports = router;