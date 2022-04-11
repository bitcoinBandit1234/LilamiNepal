import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './cardDetail.css';

function ProductDetail(){
    const [itemDetail, setItemDetail] = useState([]);
    let isRendered = useRef(false);
    const {id} = useParams();

  useEffect(() => {
    console.log("inside useeffect")
      isRendered.current = true;
      axios
          .get("http://localhost:3301/auth/product/productDetail/" + id)
          .then(res => {
              console.log(res.data.data)
              }
          )
          .catch(err => console.log(err));
      return () => {
          isRendered.current = false;
      };
  }, []);
  

    return(
      <div className="app">
            <div className="details">
              <div className="big-img">
                <img src="https://imgs.search.brave.com/x_mHaHeOzAP6m4AO4Y8CwLfTEJEOcsiQUtAu7GAoY50/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/cVNWRTdUVWNic0xD/UWRGX0ZQZlJnSGFF/SyZwaWQ9QXBp" alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>sandesh</h2>
                  <span>price</span>
                </div>

                <p>description</p>
                <button className="cart">Bid</button>

              </div>
            </div>
      </div>
    );
  }


export default ProductDetail;