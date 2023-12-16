import React from 'react'
import './css/space.css'
import Code from './images/agriculture.jpg'
import Edu from './images/business.jpg'
import Food from './Images/sports bike.jpg'
import Health from './Images/airport.jpg'
import Psych from './Images/Psychology.jpg'
import Sci from './Images/Science.jpg'
import Tech from './Images/Technology.jpg'
import Trav from './Images/Travelling.jpg'
import { Add, Agriculture } from '@mui/icons-material'


export default function Space() {
  return (
    <>
      <div className='space_container'>
      <div className='space'>
        
      <Add/>
                                      {/* SideContent */}
                 
               <p>Create space</p>
           </div>
           <div className="SidebarOption">
      <img src={Agriculture} alt="" />
      <p>Agriculture</p>
    </div>

    <div className="SidebarOption">
    <img src={Food} alt="" />
      <p>Business</p>
    </div>

    <div className="SidebarOption">
    <img src={Edu} alt="" />
      <p>Sports Bike</p>
    </div>

    <div className="SidebarOption">
    <img src={Code} alt="" />
      <p>Formula1</p>
    </div>

    <div className="SidebarOption">
    <img src={Tech} alt="" />
      <p>Technology</p>
    </div>

    <div className="SidebarOption">
    <img src={Sci} alt="" />
      <p>Airport</p>
    </div>

    <div className="SidebarOption">
    <img src={Health} alt="" />
      <p>Tour</p>
    </div>

    <div className="SidebarOption">
    <img src={Trav} alt="" />
      <p>Blogging</p>
    </div>
    <div className="SidebarOption">
      <Add/>
      <p className='text'>Discover Spaces</p>

    </div>

           
      </div>
    </>
  )
}
