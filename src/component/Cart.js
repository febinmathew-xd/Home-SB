import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Post, fileurl } from "./service/Api";

function Cart() {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    Post("getcartitems", { tablename: "cart", loginid: userdata.loginid }).then(
      (data) => {
        setItems(data);
      }
    );
  }, [refresh]);

  function deleteItem(id) {
    Post("delete", { tablename: "cart", id: id }).then((data) => {
      setRefresh((prev) => prev + 1);
    });
  }
  let sum = 0;
  let itemcount = 0;

  function payment() {
    navigate("/payment");
  }
  return (
    <>
      <Header />

      <div className="team-holder theme-padding">
        <div className="container">
          <div className="main-heading-holder">
            <div className="main-heading sytle-2"></div>
          </div>
          <div id="team-slider" >
            <div className="container">
              {items.map((value, index) => {
                sum += value.price;
                itemcount = index + 1;
                return (
                  <div className="col-md-3" >
                    <div className="team-column style-2" style={{borderRadius:'10px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
                      <img
                        src={fileurl + value.file}
                        alt=""
                        style={{ width: "150%" }}
                      />
                      <div className="player-name">
                        <div className="desination-2">{value.productname}</div>

                        <span class="btn btn danger">{value.price} ₹</span>

                        <button
                          className="player-number"
                          onClick={() => deleteItem(value.cartid)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <br></br>
            </div>
            {items.length > 0 ?  <div style={orderSummaryStyle}>
              <h2 style={summaryTitleStyle}>Order Summary</h2>
              <div style={summaryContentStyle}>
                <p style={summaryItemStyle}>
                  Number of Items:{" "}
                  <span style={summaryValueStyle}>{itemcount}</span>
                </p>
                <p style={summaryItemStyle}>
                  Total Price: <span style={summaryValueStyle}>{sum} ₹</span>
                </p>
              </div>
              <button style={proceedButtonStyle} onClick={() => payment()}>
                Proceed
              </button>
            </div>: 
               <div>
                <h1>Cart is Empty</h1>
                 </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

const orderSummaryStyle = {
  marginTop: "40px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
};

const summaryTitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const summaryContentStyle = {
  marginBottom: "20px",
};

const summaryItemStyle = {
  marginBottom: "10px",
};

const summaryValueStyle = {
  fontWeight: "bold",
};

const proceedButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
export default Cart;
