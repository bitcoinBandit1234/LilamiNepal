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

module.exports = addAuction;