import React from 'react'
import './Main.css'
import { UilSearch, UilTimes } from '@iconscout/react-unicons'
import { useState, useRef } from 'react'
import axios from 'axios'
import SearchModal from '../SearchModal/SearchModal.jsx'



const Main = ({ imageSearch }) => {
  const [modalOpened, setModalOpened] = useState(false);  
  const query = useRef()
  const [queryParams, setQueryParams] = useState('');

  const handleChange = (e) => {
    setQueryParams(e.target.value);
  }

  const scrollToImageSearch = () => {
    imageSearch.current.scrollIntoView({ behavior: "smooth" })
  }

  // Function to get search results as JSON
  // const search = async () => {
  //   const queryParams = query.current.value;

  //   try {
  //     await axios.get(`https://api.bing.microsoft.com/v7.0/custom/search?q=${queryParams}&customconfig=1b066c85-85dd-4d53-83b6-25966db0f6e9&mkt=en-US`, {
  //       headers: {
  //         "Ocp-Apim-Subscription-Key": `${process.env.REACT_APP_AZURE_KEY}`
  //       }
  //     }).then((res) => {
  //         console.log(res.data);
  //     }) 
  //   } catch (error) {
  //     console.log(error);
  //   }


  // }
    
 return (
    <div className="VideoContainer" >
     <img src="https://thedriven.io/wp-content/uploads/2019/11/04_Desktop.jpg" alt=""/>
         <div className="Title">
             The sweetest used car deals you can imagine...
         </div>
        <div className="Search">
       <input className="SearchBar" type="text" placeholder="Search our site" name="search" ref={query} onChange={handleChange}/>
                <div className="s-icon">
                <UilSearch onClick={() => setModalOpened(true)}/>
                <SearchModal modalOpened={modalOpened} setModalOpened={setModalOpened} queryParams={queryParams} />
                </div>      
     </div>
     <div className="imageSearchLink">
       <h2>...or try our new <span onClick={scrollToImageSearch}>AI photo recognition search</span></h2>
     </div>
   </div>
  )
}

export default Main