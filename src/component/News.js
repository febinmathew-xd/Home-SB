import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Post, fileurl } from './service/Api';

function News() {

  const [news, setNews] = useState([]);
  
  useEffect(()=> {
      
    
    Post("getall", {tablename:'news'}).then((data)=> {
      setNews(data);
    })



  }, []);

  return (
    <>
    <Header/>
    
    <div className="team-holder theme-padding">
        <div className="container">
              <h3>Updates</h3>
          
            <div className="">
              <div style={subContainer}>

                {
                 
                 news.map((data, index)=> {
                  return(
                      

                    
              <div style={newsContainer}>
              <img src={fileurl+data.image} style={{borderRadius:"15px", padding:"8px 1px"}} height={90} width={90} />
              <div>
              <h5 style={{fontSize:"14px", fontWeight:"600"}}>{data.title}</h5>
                <p style={{fontSize:"14px"}}>{data.content}</p>
                
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