import React, {useContext} from "react";
import {Link} from "react-router-dom"
import {GlobalContext} from "../providers/GlobalProvider";

const Header = (props) => {

  // global state
  const {user, setUser} = useContext(GlobalContext)

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" 
             id="navbarTogglerDemo01"
        >
          <Link className="navbar-brand" 
                to="/"
          >
            React Study
          </Link>
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" 
                    to="/setting"
              >
                Setting
              </Link>
            </li>
          </ul>
          <div className="form-inline ml-auto my-2 my-lg-0">
            <span>Hello, {user?.username}</span>
            {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
            {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
