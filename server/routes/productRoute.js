const router = require("express").Router();
const  {addAuction, getAuctionItems, extractAuctionDetail}  = require("../controller/auction_controller.js");
const upload = require("../helper/photoUploader.js")

router.route("/addAuction").get(getAuctionItems).post(upload.single("image"), addAuction);
router.get('/productDetail/:id', extractAuctionDetail);

module.exports = router;