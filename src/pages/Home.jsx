import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Main from '../components/Main/Main.jsx'
import SubSection from '../components/SubSection/SubSection.jsx'
import { useState } from 'react'



const Home = () => {
  const [carImages, setCarImages] = useState(null)

  const getCarImages = (images) => {
    setCarImages(images)
  }

  return (
      <div>
        <Navbar />
        <Main getCarImages={getCarImages} />
       <SubSection carImages={carImages} />
      </div>
  )
}

export default Home