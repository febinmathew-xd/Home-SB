import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Post } from './service/Api';
import News from './News';
import Messages from './Messages';
import NotificationHeader from './NotificationHeader';


function Notifications() {

  const [news, setNews] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [isNews, setIsNews] = useState(false);
  
  useEffect(()=> {
      
    
    Post("getall", {tablename:'news'}).then((data)=> {
      setNews(data);
    })

   const userdata = JSON.parse(localStorage.getItem("userdata"));

   Post('getComplaintsbByUserId', {id:userdata.id}).then((data) => {
    setComplaints(data);
    console.log('com', data);

   })



  }, []);

  const handleNewsClick = () =>{
    setIsNews(true);
  };

  const handleMessageClick = () => {
    setIsNews(false);
  }

  return (
    <>
    <Header/>


    <NotificationHeader isNews={isNews} handleNewsClick={handleNewsClick}  handleMessageClick={handleMessageClick}  />

    {isNews ? 

         <News news={news}/> :


        <Messages complaints={complaints}/>      
    }
    
   

   
    
    </>
  )
}



export default Notifications