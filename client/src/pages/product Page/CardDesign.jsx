import Card from "./card";
import Sidebar from "./sidebar.jsx";
import "./cardDesign.css"
import NavBar from "../../component/navbar/nav_bar";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function CardDisplay(){

  const [auctionItems, setAuctionItems] = useState([]);
  let isRendered = useRef(false);

useEffect(() => {
  console.log("inside useeffect")
    isRendered.current = true;
    axios
        .get("http://localhost:3301/auth/addAuction")
        .then(res => {
            if (isRendered.current && res.status <= 200) {
                setAuctionItems(res.data.data);
            }
        })
        .catch(err => console.log(err));
    return () => {
        isRendered.current = false;
    };
}, []);

   return( 
      <>
      <NavBar/>
      <div className="productDisplay">
        <div className="sidebarWrapper">
          <Sidebar/>
        </div>
        <div className="wrapper">
          {auctionItems.length != 0?    
            <Link style={{textDecoration:"none", color: "black"}} to={"/productDetail/" + auctionItems[0].auction_id}>
              <Card
              />
            </Link> 
            :
          <>No products found !</>
          }     
          <Card
          img="https://static-01.daraz.pk/original/946c1bed3562e7ab71e071e50af582ce.jpg"
          title="heater"
          description="minimum bid: 12000"
          />  
          <Card
          img="https://static-01.daraz.pk/p/5c68c2c6ef29c783e418972dde7fb030.jpg"
          title="earphones"
          description="minimum bid: 10000"
          />  
          <Card
          img="https://static-01.daraz.pk/p/4dd5d5f1b3b4f45e8d3cf1b0fc2c7f0c.jpg"
          title="refregerator"
          description="minimum bid: 20000"
          />  
          <Card
          img="https://static-01.daraz.pk/p/6eba44162067821aa4faa5c1e107def4.jpg_200x200q90-product.jpg_.webp"
          title="watch"
          description="minimum bid: 32000"
          />  
          <Card
          img="https://static-01.daraz.pk/p/94f2f423a084292f7968b6c1f2b89d59.jpg_200x200q90-product.jpg_.webp"
          title="cap"
          description="minimum bid: 13000"
          />  
    </div>
    </div>
    </>
  );

}
export default CardDisplay;