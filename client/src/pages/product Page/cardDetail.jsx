import React, { useEffect, useState } from 'react';
import './cardDetail.css';
const { io } = require("socket.io-client");

function ProductDetail(){
  useEffect(()=>{
    const socket = io("http://localhost:5069");
  },[])

  const state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Shoes",
        "src": [
            "https://static-01.daraz.com.np/p/f6ab853dcc55e47ba89156d016746eef.jpg",
            "https://static-01.daraz.com.np/p/f6ab853dcc55e47ba89156d016746eef.jpg",
            "https://static-01.daraz.com.np/p/f6ab853dcc55e47ba89156d016746eef.jpg",
            "https://static-01.daraz.com.np/p/f6ab853dcc55e47ba89156d016746eef.jpg"
          ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "count": 1
      }
    ],
    index: 0
  };

    const {products, index} = state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  }


export default ProductDetail;