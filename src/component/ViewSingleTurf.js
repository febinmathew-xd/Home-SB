import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Post, fileurl } from "./service/Api";

function ViewSingleTurf() {
  const location = useLocation();
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let param = {
      id: location.state.id,
      tablename: "turf",
    };

    Post("getbyid", param).then((data) => {
      setDetails(data);
    });
  }, []);

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <Header />

        <div style={headerStyle}>
          <h1 style={titleStyle}>{details.username}</h1>
        </div>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <div style={imageContainerStyle}>
              <img
                src={fileurl + details.file}
                alt="Product"
                style={imageStyle}
              />
            </div>
            <div style={descriptionStyle}>
              <h2 style={subtitleStyle}>Description</h2>
              <p style={textStyle}>{details.description}</p>
              <p style={textStyle}>
                Near: <b>{details.address}</b>
              </p>
              <h3 style={priceStyle}>{details.price} ₹</h3>

              

              <div style={buttonContainer}>
              <Link
                style={buttonStyle}
                to="/turfbooking"
                
              >
                Book Now
              </Link>

                <Link to='/complaint' state={{ id: location.state.id }} style={reportButton}>
                  Report Turf
                </Link>
                
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

// Inline CSS styles
const containerStyle = {
  maxWidth: "800px",
  margin: "0",
  padding: "20px",
};

const headerStyle = {
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "32px",
  fontWeight: "bold",
};

const priceStyle = {
  fontSize: "24px",
  color: "#007bff",
  marginBottom: "10px",
};

const contentStyle = {
  display: "flex",
};

const imageContainerStyle = {
  flex: "0 0 100%",
  marginRight: "20px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "8px",
};

const descriptionStyle = {
  flex: "0 0 100%",
};

const subtitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const textStyle = {
  marginBottom: "20px",
  textAlign: "left",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const reportButton = {
  backgroundColor:"#dc2626",
  color : "white",
  border: "none",
  borderRadius: "4px",
  padding : "10px 20px",
  marginLeft : "60px"

};
const buttonContainer ={
 paddingTop: "20px"
}

export default ViewSingleTurf;
