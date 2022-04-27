import Card from "./card";
import { sidebarNavItems } from "./sidebar.jsx";
import "./cardDesign.css"
import NavBar from "../../component/navbar/nav_bar";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductGridView from "./productGridView";

function CardDisplay(){

  const [auctionItems, setAuctionItems] = useState([]);
  const [sortParam, setSortParam] = useState("all");

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

      { <div className="productDisplay">
        <div className="sidebarWrapper">
        <div className='sidebar'>
        <div className="sidebarTitle">
            choose category
        </div>
        <div className="sidebarMenu">
            {
                sidebarNavItems.map((item, index) => (
                        <div className="sidebarMenuItem" key={index}>
                            <div onClick={()=>{setSortParam(item.display)}} className="sidebarText">
                                {item.display}
                            </div>
                        </div>
                ))
            }

            <div className='searchMinMax'>
                <div className='searchMin'>
                    <span>min</span>
                    <input className='minMaxInput' type="text" />
                </div>
                <div className='searchMax'>
                    <span>max</span>
                    <input className='minMaxInput' type="text" />
                </div>
            </div>
            <button className='minMaxSearch'>search</button>
        </div>
    </div>
        </div>
        
        <ProductGridView auctionItems={auctionItems} sortParam={sortParam}/>

        {/* <div className="wrapper">
          {auctionItems.length !== 0 ?
            auctionItems.map((item)=>{
              return(
                <Link key={item.auction_id} style={{textDecoration:"none", color: "black"}} to={"/productDetail/" + item.auction_id}>
                  <Card key={item.auction_id} img={item.image} title={item.title} startDate={item.auction_start_date} startTime={item.auction_start_time} endDate={item.auction_end_date} endTime={item.auction_end_time}/>
                </Link>
              );
            })
            :
              <>no product found</>
          }
        </div>  */}
    </div>}
    </>
  );

}
export default CardDisplay;