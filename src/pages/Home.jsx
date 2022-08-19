import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Main from '../components/Main/Main.jsx'
import SubSection from '../components/SubSection/SubSection.jsx'
import { useState } from 'react'



const Home = () => {
  const [carData, setCarData] = useState(null)

  const getCarData = (images) => {
    setCarData(images)
  }

  console.log(carData);

  return (
      <div>
        <Navbar />
        <Main getCarData={getCarData} />
        <SubSection/>
      </div>
      
  )
}

export default Home