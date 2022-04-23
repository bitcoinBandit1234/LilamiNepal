const connectUser = require("./socket io/socket controller/connectUser.js");
const disconnectUser = require("./socket io/socket controller/disconnectUser.js");
const productBid = require("./socket io/socket controller/productBid.js");
const updateBid = require("./socket io/socket controller/updateBid.js");

module.exports = {connectUser, disconnectUser, productBid, updateBid};