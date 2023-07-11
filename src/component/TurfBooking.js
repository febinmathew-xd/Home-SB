import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Post } from "./service/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

function TurfBooking() {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [quantity, setQuantity] = useState(1); // Added state for quantity

  const navigate = useNavigate();

  const location = useLocation();
  const [price, setPrice] = useState([]);

  useEffect(() => {
    let param = {
      id: location.state.id,
      tablename: "turf",
    };

    Post("getbyid", param).then((data) => {
      setPrice(data.price);
    });
  }, []);

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleAccountHolderNameChange = (event) => {
    setAccountHolderName(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      accountno: accountNumber,
      accountname: accountHolderName,
      cvv: cvv,
      expirydate: expiryDate,
      userid: userdata.loginid,
      hoursneeded: quantity,
      price: price * quantity,
      turfid: location.state.id,
      bookingdate: date,
      time: time,
      tablename: "turfbooking",
    };

    Post("save", param).then((data) => {
      toast.success("Booking Successful");
      setTimeout(() => {
        navigate("/booking");
      }, 1000);
    });
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "25px",
    marginLeft: "25px",
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <div style={containerStyle}>
        <h1>Payment</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>Hours Needed:</label>
            <div style={buttonContainerStyle}>
              <button
                type="button"
                onClick={handleDecrement}
                style={buttonStyle}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={handleIncrement}
                style={buttonStyle}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="accountNumber" style={labelStyle}>
              Price:
            </label>
            <input
              type="number"
              id="accountNumber"
              value={price * quantity}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="expiryDate" style={labelStyle}>
              Date:
            </label>
            <input
              type="date"
              id="expiryDate"
              value={date}
              onChange={handleDateChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="expiryDate" style={labelStyle}>
              Time:
            </label>
            <input
              type="time"
              id="expiryDate"
              value={time}
              onChange={handleTimeChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="accountNumber" style={labelStyle}>
              Account Number:
            </label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="accountHolderName" style={labelStyle}>
              Account Holder Name:
            </label>
            <input
              type="text"
              id="accountHolderName"
              value={accountHolderName}
              onChange={handleAccountHolderNameChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="cvv" style={labelStyle}>
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="expiryDate" style={labelStyle}>
              Expiry Date:
            </label>
            <input
              type="date"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
}

export default TurfBooking;
