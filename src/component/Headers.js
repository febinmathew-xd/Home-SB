import React from 'react';
import { Link } from 'react-router-dom';
import react, { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

function Headers() {

    const { onLogout } = useContext(AuthenticationContext);
  return (
    <header style={headerStyle}>
        <div style={{paddingTop:"80px",height:"100%",width: "100%",paddingRight: "50px",paddingLeft:"50px", display:"flex", alignItems: "center", justifyContent:"space-between"}}>
        <h1 >SPORTS BUDDY</h1>
        <ul style={{display:"flex",gap:"40px", }}>
        <li style={navStyle}>
        <Link style={{color:"black"}} to='/' >Home</Link>
        </li>
        <li style={navStyle}>
        <Link style={{color:"black"}} to="/accessories">Accessories</Link>
        </li>
        <li style={navStyle}>
        <Link style={{color:"black"}} to="/turf">Turf</Link>
        </li>
        <li style={navStyle}>
        <Link style={{color:"black"}} to="/tournament">Tournaments</Link>
        </li>
        <li style={navStyle}>
        <Link style={{color:"black"}} to="/booking">Booking</Link>
        </li>
        <li style={navStyle}>
        <Link style={{color:"black"}} to="/orders">Orders</Link>
        </li>
        <li style={navStyle}>
        <Link style={{color:"black"}} to="/cart">Cart</Link>
        </li>
        <li style={navStyle}>
        <Link style={{color:"black"}} to="/feedback">Feedback</Link>
        </li>
        <li style={navStyle}>
            <Link style={{color:"black"}} to="/news">News</Link>
        </li>
        </ul>

        <div>
            <Link style={button} to="/distributor">
            Distrubutor
            </Link>

            <a style={button} onClick={() => onLogout()}>
                Logout
                
            </a>

        </div>
        </div>
     
    </header>
  )
}

const headerStyle ={
    width: "100%",
    backgroundColor :"white",
    height: "50px",
    marginTop: "-80px",
    display: "flex",
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'

};

const navStyle = {
    fontWeight : "500",
    cursor: "pointer",
    
};

const button = {
    color:"white",
    backgroundColor:"red",
    padding:"5px 15px",
    borderRadius: "15px",
    fontSize: "13px",
    marginLeft: "10px",
    cursor: "pointer"
}

export default Headers