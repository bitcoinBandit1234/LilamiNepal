import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AccountContext } from "./component/AccountContext.jsx";
import SignUp from "./pages/login page/signup_page.js";
import PrivateRoutes from "./component/PrivateRoutes.jsx";

const Views = () => {
  const { user } = useContext(AccountContext);
  return user.loggedIn === null ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<h2>Hi welcome home</h2>} />
      </Route>
    </Routes>
  );
};

export default Views;