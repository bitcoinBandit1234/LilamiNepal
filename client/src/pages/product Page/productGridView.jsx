import Card from "./card";
import "./cardDesign.css"
import { Link } from "react-router-dom";

function ProductGridView(props){
    return(
    <div className="wrapper">
    {props.auctionItems.length !== 0 ?
      props.auctionItems.map((item)=>{
        return(
          <Link key={item.auction_id} style={{textDecoration:"none", color: "black"}} to={"/productDetail/" + item.auction_id}>
            <Card key={item.auction_id} minimumBid={item.minimum_bid} img={item.image} title={item.title} startDate={item.auction_start_date} startTime={item.auction_start_time} endDate={item.auction_end_date} endTime={item.auction_end_time}/>
          </Link>
        );
          
      })
      :
        <>no product found</>
    }
  </div> 
    );
}

export default ProductGridView;