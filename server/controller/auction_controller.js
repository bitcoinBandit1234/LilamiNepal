const db = require('../config/database.js')
const RedisClient = require("../config/cache.js");

const addAuction = async (req, res) => {

  const date = new Date();

  const postedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const postedTime = `${date.getHours()}:${date.getMinutes()}`;

  try {
    let data = req.body;

    const sql = "INSERT INTO auction (title, description, image, proof, starting_price, auction_start_date, auction_start_time, auction_end_date, auction_end_time, phone_number, customer_id, minimum_bid, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const user_id = await db.query("SELECT customer_id from customers WHERE username=?", [req.session.user.username]);

    await db.query(
      sql,
      [
        data.title,
        data.description,
        "http://" + req.headers.host + "/" + req.file.path,
        data.proof,
        parseInt(data.price),
        postedDate,
        postedTime,
        data.end_date,
        data.end_time,
        data.contact_number,
        user_id[0].customer_id,
        parseInt(data.minimum_bid),
        data.category
      ]);
      res.status(202).json({loggedIn: true, message: "data inserted"});

      const auctionInfo = await db.query("SELECT auction_id, starting_price, minimum_bid FROM auction ORDER BY auction_id DESC LIMIT 1");

      const productRoom = Math.floor((Math.random() * 10000) + 1);

      RedisClient.hset(
        `product:${auctionInfo[0].auction_id+1}`,
        `room`, `${productRoom}`,
        `startingBid`, `${auctionInfo[0].starting_price}`,
        `minimumBid`, `${auctionInfo[0].minimum_bid}`,
        `highestBidder`, '',
        `currentHighestBid`, 0,
        `nextBid`, 0
    );
  }
   catch (err) {
     console.log(err);
    res.status(400).json({error: "server failure"});
  }
}

const getAuctionItems = async (req, resp) => {
  try {
    const query = "SELECT * FROM 	auction";
    const output = await db.query(query); 
    
    if(output){
      resp.status(200).json({message: "succesfull fetching of products from db", data: output});
    }

  } catch (err) {
    resp.status(400).json({
      error: "failure in fetching products from database",
    });
  }
}

const extractAuctionDetail =  async (req, resp) => {
  try {
    const sql = "SELECT * FROM auction where auction_id=?";

    // if(isNaN(Number(req.params.id))) {
    //   return resp.status(400).json({ err: "Numbers only, please!"})
    // }

    const output = await db.query(sql, [req.params.id]);

    if(output && output.length>0){
        resp.status(200).json({
          message: "data succesfully fetched from the database",
          data: output,
        });
      } 
      else{
        resp.status(400).json({error:"product detail not found", data: null})
      }
    }
   catch(err) {
    resp.status(400).json({
      error: "server failure on data fetching", data: null});
  }
}
module.exports = {addAuction, getAuctionItems, extractAuctionDetail};