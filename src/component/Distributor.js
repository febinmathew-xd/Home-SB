import React, {useEffect, useState, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Post } from "./service/Api";

function Distributor(){

    const autoCompleteRef = useRef();
    const inputRef = useRef();

    const [lat, setLat] = useState();
    const [lng, setLng] = useState();

    const [username, setUsername] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [description, setDescription] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const options = {
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"],
      };

      useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          options
        );
        autoCompleteRef.current.addListener("place_changed", async function () {
          const place = await autoCompleteRef.current.getPlace();
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
    
          setAddress(place.name);
          setLat(lat);
          setLng(lng);
        });
      }, []);

      const save = () => {
        let param = {
            tablename: 'distributor',
            username: username,
            usertype: 2,
            contact:contact,
            email:email,
            password:password,
            address:address,
            description:description,
            lat:lat,
            lng:lng
        };

        Post('saveuser', param).then((data) => {
            navigate("/");
        })
      }


    return(
         
        
        <>

       <link rel="stylesheet" href="css/custom.css" disabled />
       <link rel="stylesheet" href="css/bootstrap.min.css" disabled />
       <ToastContainer />
       <Header/>


      <main className="container" style={mainContainer}>
       <div className="subcontainer" style={subContainer}>

        <h3 style={{fontWeight:"bold", letterSpacing: '5px', color:"#475569", fontSize:'16px'}}>REGISTER AS DISTRIBUTOR</h3>


        <input style={inputStyle} type="text" placeholder="Name"  
               onChange={(e) => setUsername(e.target.value)} />


        <input style={inputStyle} type="text" placeholder="Location" 
               ref={inputRef} />


        <input style={inputStyle} type="number" placeholder="Contact Number" 
               onChange={(e) => setContact(e.target.value)} />


        <input style={inputStyle} type="email" placeholder="Email Id" 
               onChange={(e) => setEmail(e.target.value)} />


        <input style={inputStyle} type="text" placeholder="Description" 
               onChange={(e) => setDescription(e.target.value)} />


        <input style={inputStyle} type="password" placeholder="Password"   
               onChange={(e) => setPassword(e.target.value)}/>


        <input style={buttonStyle} type="submit" value="Sign Up" 
               onClick={() => save()}/>

        <p style={pStyle}>Already have an account?<Link to="/" style={linkStyle}>Login</Link></p>

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
      height: "600px",
      backgroundColor: "white",
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: "100px",
      borderRadius: "15px",
      boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
      justifyContent: "center",
      
  };
  
  const inputStyle = {
    borderRadius: "12px",
    border:'none',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    padding: "10px 10px",
    width: "350px",
    outline: 'none',
  
  };
  
  const buttonStyle = {
      color: "white",
      fontWeight:'600',
      border: "none",
      backgroundColor:"#dc2626",
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      padding: '8px 140px',
      borderRadius: "15px",
     
  
  };
  
  const pStyle= {
    fontSize: "14px",
    color:"#475569"
    
  };
  
  const linkStyle = {
    marginLeft: "8px",
    color:'#dc2626'
  };
export default  Distributor;
