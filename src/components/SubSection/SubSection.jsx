import * as React from 'react';
import './SubSection.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useState, useRef, forwardRef } from 'react'
import { UilSearch, UilTimes } from '@iconscout/react-unicons'




const SubSection = forwardRef((props, imageSearch) => {
    const [image, setImage] = useState(null);
    const [returnImages, setReturnImages] = useState(null);
    console.log(returnImages);

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
                    const imageurls = [];
                    res.data.images.forEach((image) => {
                        imageurls.push(image.link);
                    });
                    setReturnImages(imageurls)
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="SubContainer" ref={imageSearch}>
            <div className="Header">
                Some real bang for your buck
            </div>
            {!image && (
                <div className="UploadInstructions">
                    Upload any vehicle image to find similar vehicles from our stock. 
                </div>
            )}
            {image && (
                <div className="previewImage">
                    <UilTimes onClick={() => setImage(null)} />
                    <img src={URL.createObjectURL(image)} alt="" />
                </div>
            )}
            <div className="ImageUpload">
                <input
                    type="file"
                    name="myImage"
                    onChange={onImageChange}
                />
                <button className="button ps-button" onClick={handleSubmit}>Search</button>
            </div>
            <div className="CardContainer">
                <Card sx={{ maxWidth: 350, height: '40vh' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={returnImages !== null ? returnImages[0] : 'https://autodiscoveries.com/wp-content/uploads/2021/11/Mercedes-Benz-Vision-AVTR-The-Most-Futuristic-Car-From-MB-1-scaled.jpg'}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto' }}>
                            Price: $6,000 NZD
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto' }}>
                            These are really rolling off our showroom floor.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 350, height: '40vh' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={returnImages !== null ? returnImages[1] : "https://carsoid.com/wp-content/uploads/2019/08/Amazing-Futuristic-Cars-820x461.jpg"}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto' }}>
                            $4,999 NZD
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto' }}>
                            Too good to be true? Maybe.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 350, height: '40vh' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={returnImages !== null ? returnImages[2] : "https://inteng-storage.s3.amazonaws.com/img/iea/lV6D2jqrOx/amazingcars11.jpg"}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto' }}>
                            $8,995 NZD
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto' }}>
                            Act fast while supplies last!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
});

export default SubSection