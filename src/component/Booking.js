import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Post } from "./service/Api";
function Booking() {
  const [orders, setOrders] = useState([]);
  const [isturf,setIsTurf] = useState(true);
  const [ticketBookings, setTicketBookings] = useState([]);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      userid: userdata.loginid,
    };
    Post("getturfbooking", param).then((data) => {
      setOrders(data);
    });

    Post('getTournamentBookingsforUser', {id:userdata.id}).then((data)=>{
      setTicketBookings(data);
      
  })

  }, []);
  return (
    <>
        <Header />
      <div className="container-fluid pt-4 px-4">
        <div className="content">
          <div className="container-fluid pt-4 px-4">
            <div className="row g-10">
              <div className="col-sm-12 col-xl-12">
                <div className="bg-light rounded h-100 p-4">
                  <div className="row">
                    <div className="col-10">
                      <h4 className="mb-4 " style={{marginLeft:"50px",marginTop:"50px",marginBottom:"20px", fontWeight:"700"}}>Your Booking</h4>
                    </div>
                    <div style={{marginLeft:"40px", marginTop: "20px", marginBottom:"20px"}}>
                      <button onClick={()=>setIsTurf(true)} style={{...buttonStyle, backgroundColor:isturf&&'#ef233c', color:isturf&&"white"}}>
                        Turf
                      </button>

                      <button  onClick={()=>setIsTurf(false)}  style={{...buttonStyle, backgroundColor:!isturf&&'#ef233c', color:!isturf&&"white"}}>
                        Tournament
                      </button>
                    </div>
                  </div>
                  {
                    isturf?(

                  <table style={{marginLeft:"40px", marginRight:"40px"}} className="table">
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
                    ):(
                      <table style={{marginLeft:"40px"}} className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Tournament</th>
                          <th scope="col">Turf Name</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Date</th>
                          <th scope="col">Tickets</th>
                          <th scope="col">Total Amount</th>
                          <th scope="col">Booked at</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ticketBookings.map((value, index) => {
                          return (
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td>{value.name}</td>
                              <td>{value.turfname}</td>
                              <td>{value.turfcontact}</td>
                              <td>{value.datefrom}</td>
                              <td>{value.ticketcount}</td>
                              <td>{value.amount}</td>
                              <td>{value.bookeddate}</td>
                              <td style={{color:"#15803d"}}>Confirmed</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const buttonStyle = {
  border:"none",
  fontWeight: "500",
  padding: "6px 20px",
  marginRight : "20px",
  borderRadius: "15px",
  backgroundColor:' rgba(234,434,4343,0)',
  /* border: "1px solid rgba(234,434,4343,0) ", */
  
}

export default Booking;
