import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './cardDetail.css';
import { socket } from '../Home page/home_page';
import ChatBox from '../../component/chatBox/chatBox';
import { AccountContext} from '../../component/AccountContext';
import { useContext } from 'react';


function ProductDetail(){
    const [itemDetail, setItemDetail] = useState([]);
    const [nextBidAmt, setNextBid] = useState(0);
    const [currentBidder, setCurrentBidder] = useState({});
    const {user} = useContext(AccountContext);
    const [render, setRender] = useState(false);
    let isRendered = useRef(false);
    const {id} = useParams();

    const joinChat = ()=>{
      setRender(true);
      socket.emit('joinChat', itemDetail[0].customer_id);
    }

  useEffect(() => {
      isRendered.current = true;
      axios
          .get("http://localhost:3301/product/productDetail/" + id)
          .then(res => {
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
                <span className='card__detail'>auction end date: {itemDetail[0].auction_end_date}</span>
                <span className='card__detail'>auction end time: {itemDetail[0].auction_end_time}</span>
                <span className='card__detail'>starting price: {itemDetail[0].starting_price}</span>
              </div>

              <div>
                <h4 style={{marginBottom: "5px"}}>Auction</h4>
                <span className='card__detail'>current Highest Bidder: {itemDetail[0].starting_price}</span>
                <span className='card__detail'>Current Bid Amount {itemDetail[0].starting_price}</span>
                <span className='card__detail'>Next bid amount: {nextBidAmt}</span>
                <span className='card__detail'>Time Remaining: 22: 15: 40</span>
                <button className="cart">Bid</button>
                <button className="cart cart2" onClick={joinChat}>Chat</button>
              </div>
            </div>
          </div>:
          <>Item detail not found</>
          }
          {render? <ChatBox socket={socket} user={user} seller={itemDetail[0].customer_id}/>: <></>}
      </div>
    );
  }


export default ProductDetail;