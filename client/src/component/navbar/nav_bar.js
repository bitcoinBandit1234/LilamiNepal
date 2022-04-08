import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import './navStyle.css'
import { AccountContext } from '../AccountContext.jsx'

function NavBar(){
  const {user} = useContext(AccountContext);

    return (
     <nav> 
      <div className="logo">Lilami Nepal</div>
      <div className="nav-items" >
        <li><Link to="/">Home</Link></li>

        {user.loggedIn? <></>: 
        <li><Link to="/signup">Login</Link></li>
        }

        <li><Link to="/Browse">Browse</Link></li>

        {user.loggedIn? <li><Link to="/profile">profile</Link></li>: 
        <></>
        }

        {user.username? <li><Link to="/profile">{user.username}</Link></li>: 
          <></>
        }

        {user.username? <li><Link to="/profile">logout</Link></li>: 
          <></>
        }
      </div>
    </nav> 
    );
}

export default NavBar;