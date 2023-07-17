import React from 'react'

function Messages({complaints}) {
  return (
    <div className="team-holder theme-padding">
    <div className="container">
          
      
        <div className="">
          <div style={subContainer}>

 
           { complaints?.map((complaint) => {
            return(
                <div style={messageContainer}>
                <div style={titleContainer}>
                <h3 style={{fontSize:'15px', fontWeight:'500', marginLeft:'15px'}}> <span style={{color:'red'}}>Sports</span> Buddy</h3>
                <i className="fa-solid fa-circle-check" style={{color:'green', paddingTop:'6px', opacity:'0.7'}}></i>
                
                </div>

                <div>

                <div style={{marginBottom:'10px'}} >
                <h5 style={{marginLeft:'15px', opacity:"0.8"}}>Your Complaint against <span style={{color:'red', opacity:'0.9'}} > {complaint.turfname} <span style={{color:'black'}}>{`(#${complaint.complaintid})`}</span></span></h5>
                <div style={complaintContainer}>
                <h6 style={{fontSize:'13px', fontWeight:'500', opacity:'0.7'}}>{complaint.title}</h6>
                  <h6 style={{fontSize:'12px', opacity:'0.7' , fontWeight:'400'}}>{complaint.complaint}</h6>
                </div>
                  
                </div>
                <div style={{marginBottom:'10px'}} >
                <h5 style={{marginLeft:'15px', opacity:"0.8", color:'red'}}>Reply <span style={{color:'black'}}>:</span> </h5>
                <div style={replyContainer}>

                    {
                        complaint?.reply ==null ? <h6 style={{fontSize:'13px', opacity:'0.4'}}>Waiting for Reply....(pending..)</h6> : <>
                            
                <h6 style={{fontSize:'13px', fontWeight:'500', opacity:'0.7'}}>{complaint.replytitle}</h6>
                  <h6 style={{fontSize:'12px', opacity:'0.7', fontWeight:'400'}}>{complaint.reply}</h6>

                         </> 

                
                  
                    }
                </div>
                  
                </div>
                

                </div>
                
   
            </div>

            )
           })
           

             }


            <div>
               
            </div>

          </div>
        </div>
      
      <div id="team-slider">
       
      </div>
    </div>
  </div>
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

const messageContainer = {
    backgroundColor:"white",
    width: "100%",
    minHeight: "50px",
    borderRadius: "15px",
    margin: "5px 20px",
    display:"flex",
    flexDirection:'column',


    alignItems:"flex-start",
    paddingLeft: "30px",
    paddingRight: "10px",
    gap: "20px"
    

};


const complaintContainer = {
    backgroundColor:'#f1f5f9',
    padding: '5px 15px',
    borderRadius:'10px'

};

const replyContainer = {
    backgroundColor:'#ffe4e6',
    padding: '5px 15px',
    borderRadius:'10px'
}


const titleContainer =  {
    display:'flex',
    width:'200px' ,
    height:'44px',
    alignItems:'center',
    gap:'10px'
}

export default Messages