import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuctionAdd from "./pages/Add auction page/auctionAdd.jsx"

ReactDOM.render(
    <BrowserRouter>
        <AuctionAdd />
    </BrowserRouter>,
  document.getElementById("root")
);
