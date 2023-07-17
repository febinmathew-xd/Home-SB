import React from 'react'

function NotificationHeader({ handleMessageClick, handleNewsClick, isNews}) {

 const handleNewsButtonClick = () => {
    handleNewsClick();
 };

 const handleMessageButtonClick = () => {
    handleMessageClick();
 }

  return (
    <div className="team-holder theme-padding" style={{paddingBottom:'1px'}}>
    <div className="container">
        <button onClick={handleMessageButtonClick} style={{...buttons, backgroundColor:!isNews&&'#ef233c', color:!isNews&&'whitesmoke'}}>Messages</button>
        <button onClick={handleNewsButtonClick} style={{...buttons, backgroundColor:isNews &&'#ef233c', color:isNews&&'whitesmoke'}}>News</button>


        </div>
        </div>
  )
}

const buttons = {
    border:'none',
    borderRadius: '10px',
    marginRight:'30px',
    padding: '5px 20px',
    fontWeight:'500'


}



export default NotificationHeader