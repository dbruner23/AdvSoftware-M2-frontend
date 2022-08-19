import React from 'react'
import './Main.css'
import { useState, useEffect, useRef } from 'react'
import { UilSearch, UilTimes } from '@iconscout/react-unicons'
import axios from 'axios'
import cors from 'cors'

const Main = ({getCarData}) => {
  const [image, setImage] = useState(null);
  const [returnImage, setReturnImage] = useState(null);
  

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      // const data = new FormData();
      // data.append('file', img)
      setImage(img)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const visionFile = {};
    const data = new FormData();
    const fileName = image.name;
    data.append("name", fileName);
    data.append("file", image);
    visionFile.image = fileName
    try {
      await axios.post('http://localhost:4000/upload', data)
    } catch (error) {
      console.log(error);
    }
    
    try {
      await axios.post('http://localhost:4000/vision', visionFile)
        .then(res => {
          console.log(res.data)
          setReturnImage(res.data.images[0].link)
          getCarData(res.data.images[0].link)
          setImage(null)

        })
    } catch (error) {
      console.log(error);
    }
  }

  console.log(returnImage);
    
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
        <div className="ImageUpload">
          <input
          type="file"
          name="myImage"
          onChange={onImageChange}
          />
       <button className="button ps-button" onClick={handleSubmit}>Search</button>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
        {returnImage && (
          <div className="returnImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={returnImage} alt="" />
          </div>
        )}
        
    </div>
  )
}

export default Main