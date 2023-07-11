import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Post, fileurl } from "./service/Api";

function ViewSingleProduct() {
  const location = useLocation();
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let param = {
      id: location.state.id,
      tablename: "products",
    };

    Post("getbyid", param).then((data) => {
      setDetails(data);
    });
  }, []);

  const addToCart = () => {
    //
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      userid: userdata.loginid,
      productid: location.state.id,
      price: details.price,
      tablename: "cart",
    };

    Post("save", param).then((data) => {
      navigate("/cart");
    });
  };

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <Header />

        <div style={headerStyle}>
          <h1 style={titleStyle}>{details.productname}</h1>
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
              <h3 style={priceStyle}>{details.price} ₹</h3>

              <button style={buttonStyle} onClick={() => addToCart()}>
                Add to Cart
              </button>
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

export default ViewSingleProduct;
