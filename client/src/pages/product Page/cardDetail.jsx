import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './cardDetail.css';

function ProductDetail(){
    const [itemDetail, setItemDetail] = useState([]);
    const [nextBidAmt, setNextBid] = useState(0);
    const [currentBidder, setCurrentBidder] = useState({});

    let isRendered = useRef(false);
    const {id} = useParams();

  useEffect(() => {
    console.log("inside useeffect")
      isRendered.current = true;
      axios
          .get("http://localhost:3301/auth/product/productDetail/" + id)
          .then(res => {
              console.log(res.data.data)
              setItemDetail(res.data.data)
              }
          )
          .catch(err => console.log(err));
      return () => {
          isRendered.current = false;
      };
  }, []);
  

    return(
      <div className="app" style={{fontFamily: "ubuntu, sans-serif"}}>
        {itemDetail.length != 0? 
          <div className="details">
            <div className="big-img">
              <img src={itemDetail[0].image} alt=""/>
            </div>
      
            <div className="box">
              <div className="row">
                <h2>{itemDetail[0].title}</h2>
                <span>posted on: { itemDetail[0].auction_start_date}</span>
              </div>
              <p>{itemDetail[0].description}</p>
              <div style={{borderBottom: "2px solid	#778899", marginBottom: "6px"}}>
                <h4 style={{marginBottom: "5px"}}>Info</h4>
                
                <span style={{display: "block", marginBottom: "10px"}}>auction end date: {itemDetail[0].auction_end_date}</span>
                <span style={{display: "block", marginBottom: "10px"}}>auction end time: {itemDetail[0].auction_end_time}</span>
                <span style={{display: "block", marginBottom: "10px"}}>starting price: {itemDetail[0].starting_price}</span>
              </div>

              <div>
                <h4 style={{marginBottom: "5px"}}>Auction</h4>
                <span style={{display: "block", marginBottom: "10px"}}>current Highest Bidder: {itemDetail[0].starting_price}</span>
                <span style={{display: "block", marginBottom: "10px"}}>Current Bid Amount {itemDetail[0].starting_price}</span>
                <span style={{display: "block", marginBottom: "10px"}}>Next bid amount: {nextBidAmt}</span>
                <span style={{display: "block", marginBottom: "10px"}}>Time Remaining: 22: 15: 40</span>
                <button className="cart">Bid</button>
              </div>
            </div>
          </div>:
          <>Item detail not found</>
          }
      </div>
    );
  }


export default ProductDetail;