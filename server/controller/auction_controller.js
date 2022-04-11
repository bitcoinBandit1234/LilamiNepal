const db = require('../config/database.js')

const addAuction = async (req, res) => {

  const date = new Date();

  const postedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const postedTime = `${date.getHours()}:${date.getMinutes()}`;

  try {
    let data = req.body;
    const sql = "INSERT INTO auction (title, description, image, proof, starting_price, auction_start_date, auction_start_time, auction_end_date, auction_end_time, insta_buy, phone_number, customer_id, minimum_bid, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    await db.query(
      sql,
      [
        data.title,
        data.description,
        "http://" + req.headers.host + "/" + req.file.path,
        "sandesh",
        parseInt(data.price),
        postedDate,
        postedTime,
        data.end_date,
        data.end_time,
        parseInt(data.insta_buy),
        data.contact_number,
        10,
        parseInt(data.minimum_bid),
        data.category
      ]);
      res.status(202).json({loggedIn: true, message: "data inserted"});
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