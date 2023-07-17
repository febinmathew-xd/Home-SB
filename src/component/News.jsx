import React, {useEffect} from 'react';
import { fileurl } from './service/Api';

function News({news}) {

   


  return (
    <>
    <div className="team-holder theme-padding">
        <div className="container">
              
          
            <div className="">
              <div style={subContainer}>

                {
                 
                 news.map((data, index)=> {
                  return(
                      

                    
              <div key={index} style={newsContainer}>
              <img src={fileurl+data.image} style={{borderRadius:"15px", padding:"8px 1px"}} height={90} width={90} />
              <div>
              <h5 style={{fontSize:"14px", fontWeight:"600"}}>{data.title}</h5>
                <h6 style={{fontSize:"14px", fontWeight:'300'}}>{data.content}</h6>
                
              </div>
               
              </div>

                  )
                 })

                }
             


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

const newsContainer = {
    backgroundColor:"white",
    width: "100%",
    minHeight: "50px",
    borderRadius: "15px",
    margin: "5px 20px",
    display:"flex",

    alignItems:"center",
    paddingLeft: "10px",
    paddingRight: "10px",
    gap: "20px"
    

}

export default News