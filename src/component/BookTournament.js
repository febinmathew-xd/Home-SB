import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { Post } from './service/Api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookTournament() {

    const [count, setCount] = useState(1);
    const [price , setPrice] = useState();
    const [accountNumber, setAccoutNumber] = useState();
    const [name, setName] = useState();
    const [cvv, setCvv] = useState();
    const [expiry, setExpiry] = useState();
    const [tournament, setTournament] = useState();

    const location = useLocation();
    const navigate = useNavigate();
    const tournamentid = location.state.id;
    console.log(tournamentid);
   
    

   
    /* INCREMENT DECREMENT FUNCTIONS */

    function decrement () {
          setCount(count-1);
    };

    function increment() {
          setCount(count+1);
          
    };

    /*---------------------------- END->*/

    /* BOOK TICKET FUNCTION */

    const bookTicket = (event) => {
        event.preventDefault();

        const userdata = JSON.parse(localStorage.getItem("userdata"));

        let param = {
            userid: userdata.loginid,
            tournamentid: tournamentid,
            accountno: accountNumber,
            accountname:name,
            cvv: cvv,
            expiry: expiry,
            ticketcount:count,
            amount: price*count,
            tablename:"ticketbooking"
        };

        Post('save', param).then((data)=> {
            toast.success("Booking Successful");
            setTimeout(() => {
              navigate("/booking");
            }, 1000);
        });


    };



    /* ___________________END-> */


    useEffect(()=> {
    
        Post('gettournamentbyid',{id:tournamentid}).then((data) => {
            setTournament(data);
            setPrice(data.ticketprice);
            console.log("tour", data);
            
        });

    }, []);

  

  return (
    <>
    <Header/>
    <ToastContainer/>
    <div className="team-holder theme-padding">
        <div className="container">
          <div className="main-heading-holder">
            <div className="main-heading sytle-2">
              <h2>Book Tickets</h2>
              <div style={subContainer}>
               

                

                <div className='details card' style={details}>
                <h3 style={maintitle}>
                    Tournament Details
                </h3>
                 
                 <h3>{tournament?.name}</h3>
                  <div style={dateContainer}>
                  <h5>From : {tournament?.datefrom} </h5>
                 <h5>To : {tournament?.dateto}</h5>
                  </div>

                  <h5>Time : {tournament?.time}</h5>
                  <h5>Host: {tournament?.username}</h5>
                  <h6>Location: {tournament?.address}</h6>

                  <div>
                    <div>
                        <h5>Tickets:</h5>
                        <div>
                            <button onClick={decrement} disabled={count<=1} style={incrementbtn}>-</button>
                            <input style={inputField} type='text' value={count} />
                            <button onClick={increment}  style={incrementbtn}>+</button>
                        </div>
                    </div>
                  </div>

                  <hr/>

                  <div style={amount}>
                    <h4>Total Amount to be Paid</h4>
                    <h4>Rs {price * count}/-</h4>
                    
                  </div>

                  <div style={confirmContainer}>
                    <button onClick={bookTicket} style={confirmBtn}>
                    Confirm
                    </button>
                  </div>
                 

                </div>

                <div className='account-details' style={accountContainer}>

                    <h4 style={acHeader}>Card Details</h4>

                    <label style={label} for='name'>
                        Card Holder Name
                    </label>
                    <br/>
                    <input onChange={(event)=> {setName(event.target.value)}} required style={inputAc} type='text' placeholder='Card Holder Name'/>
                    <br/>
                    <br/>
                    <label style={label} for='name'>
                        Card Number
                    </label>
                    <br/>
                    <input onChange={(event)=> {setAccoutNumber(event.target.value)}}  style={inputAc} type='text' placeholder='Card Number'/>
                    <br/>
                    <br/>
                    <label style={label} for='name'>
                        CVV
                    </label>
                    <br/>
                    <input onChange={(event)=> {setCvv(event.target.value)}}  style={inputAc} type='text' placeholder='CVV'/>
                    <br/>
                    <br/>
                    <label style={label} for='name'>
                       Expiry Date
                    </label>
                    <br/>
                    <input onChange={(event)=> {setExpiry(event.target.value)}}  style={inputAc} type='date' placeholder='expiry'/>
                    <br/>
                    <br/>

                </div>
               
                
                
               

              </div>
            </div>
          </div>
          <div id="team-slider">
           
          </div>
        </div>
      </div>
    </>
  )
}

const subContainer = {
    width: "1200px",
    MinHeight: "400px",
    backgroundColor: "rgba(137,176,130,0.2)",
    margin: "auto",
    borderRadius: "25px",
    marginTop: "30px",
    display: 'flex',
    flexDirection: 'row',
    flexWrap : 'wrap',
    justifyContent: "space-around",
    alignItems:'center',
    padding: "10px"
    
};

const details = {
    backgroundColor: ' white',
    borderRadius : "20px",
    minWidth : "600px",
    padding: '10px'
};

const dateContainer ={
    display: "flex",
    justifyContent:"space-between",
    padding: "1px 50px"
};

const inputField = {
    width: "30px" ,
    margin: "1px 10px",
    textAlign : "center",
    /* backgroundColor: "#fca5a5", */
    border: "none",
    /* color: "white", */
    border : '1px solid red',
    borderRadius: "5px",
};

const incrementbtn = {
    border : "none",
    backgroundColor: "#ef4444",
    color : "white",
    borderRadius : "6px",
    padding: "5px 15px",
    fontWeight: "600"
};

const amount = {
    display : "flex",
    justifyContent: "space-between",
    padding: '1px 30px'
};

const confirmBtn = {
    backgroundColor : "#ef4444",
    color : "white",
    padding : "5px 20px",
    borderRadius : " 7px",
    fontWeight: "500",
    border: "none"
     
};

const confirmContainer= {
    marginTop: "20px",
    marginBottom : "10px",
    display: " flex",
    justifyContent: "flex-end",
    marginRight : "30px"
};

const maintitle = {
    backgroundColor: "#e5e7eb",
    padding: " 10px 1px",
    margin: '1px 50px',
    borderRadius: "15px"
};

const accountContainer = {
    backgroundColor: ' white',
    borderRadius : "20px",
    minWidth : "400px",
    padding: '10px'
};

const label = {
    fontWeight: "500",
    
};

const inputAc = {
    borderRadius: "10px",
    padding:"5px 20px"
};

const acHeader = {
    backgroundColor: "#e5e7eb",
    padding: '10px 1px',
    margin: "10px 30px",
    borderRadius: "15px",
   /*  marginBottom: "10px" */
}

export default BookTournament