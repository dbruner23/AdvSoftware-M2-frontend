import * as React from 'react';
import './SubSection.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const SubSection = () => {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className="SubContainer">
            <div className="Header">
                Some real bang for your buck
            </div>
            <div className="CardContainer">
                <Card sx={{ maxWidth: 370, height: '55vh' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://cds.chinadaily.com.cn/dams/capital/image/202011/09/5fa8d9d6e4b0fbee20198360.jpeg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto'}}>
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
                <Card sx={{ maxWidth: 370, height: '55vh' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://carsoid.com/wp-content/uploads/2019/08/Amazing-Futuristic-Cars-820x461.jpg"
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
                <Card sx={{ maxWidth: 370, height: '55vh' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://inteng-storage.s3.amazonaws.com/img/iea/lV6D2jqrOx/amazingcars11.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto'}}>
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
    );
};

export default SubSection