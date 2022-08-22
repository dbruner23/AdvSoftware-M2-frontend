import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Main from '../components/Main/Main.jsx'
import SubSection from '../components/SubSection/SubSection.jsx'
import { useRef } from 'react'



const Home = () => {
  const imageSearch = useRef(null)

  return (
      <div>
        <Navbar />
        <Main imageSearch={imageSearch} />
      <SubSection ref={imageSearch} />
      </div>
  )
}

export default Home