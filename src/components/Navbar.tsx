import React, {FC} from 'react';
import {Link, useLocation} from "react-router-dom";

const Navbar: FC = () => {
    const location = useLocation()
    return (

        <div style={{display: "flex", width: "50vw", margin: "15px auto", justifyContent: "space-around"}}>
            <Link to={"/"}
                  style={{
                      fontWeight: location.pathname === "/" ? "bold" : "initial",
                      color: location.pathname === "/" ? "green" : "black",
                      textDecoration: location.pathname === "/" ? "" : "none"
                  }}>
                HOME
            </Link>
            <Link to={"/users"}
                  style={{
                      fontWeight: location.pathname === "/users" ? "bold" : "initial",
                      color: location.pathname === "/users" ? "green" : "black",
                      textDecoration: location.pathname === "/users" ? "" : "none"
                  }}>
                USERS
            </Link>
            <Link to={"/todos"}
                  style={{
                      fontWeight: location.pathname === "/todos" ? "bold" : "initial",
                      color: location.pathname === "/todos" ? "green" : "black",
                      textDecoration: location.pathname === "/todos" ? "" : "none"
                  }}>
                TODOS
            </Link>
        </div>
    );
};

export default Navbar;