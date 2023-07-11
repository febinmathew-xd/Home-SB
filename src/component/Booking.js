import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Post } from "./service/Api";
function Booking() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      userid: userdata.loginid,
    };
    Post("getturfbooking", param).then((data) => {
      setOrders(data);
    });
  }, []);
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <Header />
        <div className="content">
          <div className="container-fluid pt-4 px-4">
            <div className="row g-10">
              <div className="col-sm-12 col-xl-12">
                <div className="bg-light rounded h-100 p-4">
                  <div className="row">
                    <div className="col-10">
                      <h2 className="mb-4">Your Booking</h2>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Turf Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price</th>
                        <th scope="col">Hours</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((value, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{value.username}</td>
                            <td>{value.address}</td>
                            <td>{value.price}</td>
                            <td>{value.hoursneeded}</td>
                            <td>{value.bookingdate}</td>
                            <td>{value.time}</td>
                            <td>
                              {value.status == 0
                                ? "Order Placed"
                                : value.status == 1
                                ? "Order Accepted"
                                : value.status == 2
                                ? "Completed"
                                : value.status == 3
                                ? "Rejected"
                                : ""}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
