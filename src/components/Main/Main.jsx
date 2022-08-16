import React from 'react'
import './Main.css'
import { useEffect, useRef } from 'react'
import { UilSearch } from '@iconscout/react-unicons'

const Main = () => {
    
    
 return (
    <div className="VideoContainer">
     <img src="https://thedriven.io/wp-content/uploads/2019/11/04_Desktop.jpg" alt=""/>
         <div className="Title">
             The sweetest used car deals you can imagine...
         </div>
        <div className="Search">
                <input className="SearchBar" type="text" placeholder="Search our site"/>
                <div className="s-icon">
                <UilSearch/>
                </div>      
        </div>
    </div>
  )
}

export default Main