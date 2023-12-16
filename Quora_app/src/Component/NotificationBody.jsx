import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Notificationbody.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
function NotificationBody() {
  return (
    <>
       <div className="Notification_body_container">
        
      <div className='Heading'>         
      <h4>Notifications</h4>
      <p> Settings</p>
      </div>

                         {/* MAin TExt */}
       <div className='singleNotificationstyl'>
              <div className='profileLogo svg-icon'><Avatar/></div>
              <div className='notifiparagraph'><span className='author'>Іван Борисенко</span><span className='days'>  Mon</span>
              <h3 className='ques'>On persistent media narratives about Putin’s health ?</h3>
              <p className='view'> Dan Glawe
 answer this</p>
              </div>
              <div className='tripledot'><MoreHorizIcon/></div>
       </div>
       <div className='singleNotificationstyl'>
        <div className='profileLogo svg-icon'><Avatar/></div>
        <div className='notifiparagraph'><span className='author'>Devindra Hardawar</span><span className='days'>May 21 </span>
        <h3 className='ques'>Microsoft's Windows 11 2023 update rolls out, bringing Copilot AI to more users</h3>
        <p className='view'>Pedri L.
answered this </p>
        </div>
        <div  className='tripledot'><MoreHorizIcon/></div>
       </div>
       <div className='singleNotificationstyl'>
           <div className='profileLogo svg-icon'><Avatar/></div>
           <div className='notifiparagraph'><span className='author'>Arthur Brown</span>
           <span className='days'>May 04</span>
           <h3 className='ques'>Can AI chnage the world for good? Bill Gates believes so </h3>
           <p className='view'> Arthur Brown  answere this</p>
           
           </div>
           <div  className='tripledot'><MoreHorizIcon/></div>
       </div>
      
      </div>
    </>
  )
}

export default NotificationBody
