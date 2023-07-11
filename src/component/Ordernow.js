import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";

function Ordernow() {
  return (
    <>
      <Header />
      <table>
        <tr>
          <td>
            <div className="contact-us">
              <form method="post" className="comments-form" id="contactform">
                <ul>
                  <li>
                    <input
                      type="text"
                      id="Address"
                      name="Address"
                      className="required description"
                      placeholder="Address*"
                    />
                  </li>
                  <li>
                    <select
                      type="text"
                      className="form-control bg-light border-0 px-1"
                      placeholder="Method of Payment:"
                      style={{ height: "25%", width: "100%" }}
                    >
                      <option>Payment Method</option>
                      <option>Cash on delivery</option>
                      <option>Online Payment</option>
                    </select>
                  </li>
                  <br></br> <br></br>
                  <li>
                    {" "}
                    <button
                      type="submit"
                      className="btn"
                      style={{ backgroundColor: "#41ead4" }}
                    >
                      Pay Now
                    </button>
                  </li>{" "}
                </ul>
              </form>
            </div>
          </td>
          <td> &nbsp; &nbsp; &nbsp;</td>
          <td>
            <br></br> <br></br>
            <div>
              {" "}
              <img
                src="images/100.jpg"
                alt=""
                style={{ width: "250px", height: "250px" }}
              />
              <img
                src="images/200.jpg"
                alt=""
                style={{ width: "250px", height: "250px" }}
              />
              <img
                src="images/300.jpg"
                alt=""
                style={{ width: "250px", height: "250px" }}
              />
              <img
                src="images/500.jpg"
                alt=""
                style={{ width: "250px", height: "250px" }}
              />
            </div>
            <br></br> <br></br> <br></br>
            <div>
              <center>
                <input
                  type="text"
                  id="Total"
                  name="Total"
                  className="required description"
                  placeholder="Total*"
                  style={{ backgroundColor: "#41ead4" }}
                />
              </center>
            </div>
            <br></br> <br></br> <br></br>
          </td>
        </tr>
      </table>
    </>
  );
}
export default Ordernow;
