import React from 'react'
import './Main.css'
import { UilSearch, UilTimes } from '@iconscout/react-unicons'


const Main = ({ imageSearch }) => {
  
const scrollToImageSearch = () => {
  imageSearch.current.scrollIntoView({ behavior: "smooth" })
} 

    
 return (
    <div className="VideoContainer" >
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
     <div className="imageSearchLink">
       <h2>...or try our new <span onClick={scrollToImageSearch}>AI photo recognition search</span></h2>
     </div>
    </div>
  )
}

export default Main