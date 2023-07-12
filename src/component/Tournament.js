import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Post } from './service/Api';

function Tournament() {


   const [tournaments, setTournaments] = useState([]);

   useEffect(()=> {

      Post('getalltournaments', {tablename:"tournaments"}).then((data) => {
         setTournaments(data);
         console.log(data);
      })

   }, []);


   return (
    <>
    <Header/>
    <div className="team-holder theme-padding">
        <div className="container">
          <div className="main-heading-holder">
            <div className="main-heading sytle-2">
              <h2>Tournaments</h2>
              <div style={subContainer}>


               {tournaments?.map((tournament,index)=> {
                  return(
                <div key={index} style={card}>
                   <h4 style={title}>{tournament.name}</h4>
                   <div style={dateContainer}>
                   <h5>From: {tournament.datefrom}</h5>
                   <h5>To: {tournament.dateto}</h5>
                   </div>
                   <h5>Time: {tournament.time} </h5>
                   <h5>Host: {tournament.username}</h5>
                   <h6>Location: {tournament.address}</h6>
                   <button style={bookButton}>
                    Book Ticket
                   </button>
                   
                </div>

                  )
               })}
                
               
                
                
               

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
    justifyContent: "center",
    alignItems:'center'
    
};

const card = {
    minHeight: '180px',
    width: '350px',
    backgroundColor:"white",
    margin:"20px",
    borderRadius: "25px"
};
const dateContainer = {
    /* border: "0.5px solid black", */
    display: "flex",
    justifyContent: 'space-between',
    borderRadius: "30px",
    margin: "2px 20px",
    padding: "1px 20px",
    backgroundColor: "rgba(137,176,130,0.5)"
};

const bookButton = {
    backgroundColor: '#4e878c',
    color : 'white',
    border: "none",
    padding: "6px 60px",
    borderRadius: "25px",
    fontWeight: '600',
    marginBottom : '10px'
};
const title = {
    fontWeight:"600"
}



export default Tournament