import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import { ToastContainer } from "react-toastify";
import Header from './Header';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthenticationContext);
  return (
    <>
      <link rel="stylesheet" href="css/custom.css" disabled />
      <link rel="stylesheet" href="css/bootstrap.min.css" disabled />
      <ToastContainer />
      <Header/>


      <main className="container" style={mainContainer}>
       <div className="subcontainer" style={subContainer}>

        <h3 style={{fontWeight:"bold", letterSpacing: '10px', color:"#475569"}}>LOGIN</h3>
        <input style={inputStyle}  type="text"  placeholder="Username" onChange={(e) => {
                  setEmail(e.target.value);
                }} />
        <input style={inputStyle} type="password" placeholder="Password"  onChange={(e) => {
                  setPassword(e.target.value);
                }}/>
        <input style={buttonStyle} type="submit" value="Login" onClick={(e) => {
                onLogin(email, password);
              }}/>
        <p style={pStyle}>Don't have an account?<Link to="/register" style={linkStyle}>Sign Up</Link></p>

       </div>

      </main>







    </>
  );
}

const mainContainer = {
  width: "100%",
  height:"100vh",
  backgroundColor : "#e2e8f0",
  
};

const subContainer = {
    width: "500px",
    height: "500px",
    backgroundColor: "white",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: "120px",
    borderRadius: "15px",
    boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
    justifyContent: "center"
};

const inputStyle = {
  borderRadius: "12px",
  border:'none',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  padding: "10px 10px",
  width: "300px",
  outline: 'none',

};

const buttonStyle = {
    color: "white",
    fontWeight:'600',
    border: "none",
    backgroundColor:"#dc2626",
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    padding: '8px 120px',
    borderRadius: "15px",
   

};

const pStyle= {
  fontSize: "14px",
  color:"#475569"
  
};

const linkStyle = {
  marginLeft: "8px",
  color:'#dc2626'
}


export default Login;
