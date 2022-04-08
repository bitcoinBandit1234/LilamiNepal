import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AccountContext } from "./component/AccountContext.jsx";
import SignUp from "./pages/login page/signup_page.js";
import PrivateRoutes from "./component/PrivateRoutes.jsx";
import AuctionAdd from "./pages/Add auction page/auctionAdd.jsx";
import Home_page from "./pages/Home page/home_page.jsx";
import Spinner from "./helpers/spinner.js";

const Views = () => {
  const { user } = useContext(AccountContext);
  return user.loggedIn === null ? (
    <Spinner/>
  ) : (
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/" element={<Home_page/>} />
      <Route element={<PrivateRoutes />}>
        <Route path="/addAuction" element={AuctionAdd} />
      </Route>
    </Routes>
  );
};

export default Views;