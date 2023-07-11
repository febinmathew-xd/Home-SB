import React, { useState } from "react";
import Header from "./Header";
import { Post } from "./service/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      accountno: accountNumber,
      accountname: accountHolderName,
      cvv: cvv,
      expirydate: expiryDate,
      userid: userdata.loginid,
    };

    Post("createorder", param).then((data) => {
      toast.success("Order Successful");

      navigate("/orders");
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
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div style={containerStyle}>
        <h1>Payment</h1>
        <form onSubmit={handleSubmit}>
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
            Payment Now
          </button>
        </form>
      </div>
    </>
  );
}

export default Payment;
