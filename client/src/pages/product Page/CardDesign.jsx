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
    isRendered.current = true;
    axios
        .get("http://localhost:3301/product/addAuction")
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
            auctionItems.map((item)=>{
              return(
                <Link key={item.auction_id} style={{textDecoration:"none", color: "black"}} to={"/productDetail/" + item.auction_id}>
                  <Card key={item.auction_id} img={item.image} title={item.title} timer="22:44:27"/>
                </Link>
              );
            })
            :
            <>No products found !</>
          }
    </div> 
    </div>
    </>
  );

}
export default CardDisplay;