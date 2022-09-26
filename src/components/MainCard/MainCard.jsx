import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import style from './MainCard.module.css';


const MainCard = ({item}) => {
    return (
        <div className={style.wrapper}>
            <Card sx={{ width: 280 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width={160}
                        height={200}
                        image={item.img}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default MainCard;