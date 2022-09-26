import React, { useState } from 'react';
import { CardActionArea } from '@mui/material';
import { useSpring, a } from '@react-spring/web';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CachedIcon from '@mui/icons-material/Cached';
import IconButton from '@mui/material/IconButton';
import Cry from '../../assets/audio/actionA/cry.mp3'
import Dance from '../../assets/audio/actionA/dance.mp3'
import styles from './TypeCard.module.css';


const TypeCard = ({item, index}) => {

    const [flipped, set] = useState(false)

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    const handlerCardActive = (e) => {
        e.stopPropagation();
        set(true);
    };

    const handlerCard = (e) => {
        e.stopPropagation();
        set(false);
    };

    const playWord = (name) => {
        let audio = new Audio();
        audio.src = `/static/media/${name}.d1fde924e79d6d76d1e3.mp3`; 
        audio.type="audio/mp3"
        audio.autoplay = true;

   };

   console.log(item.audio, 'item')
      
    return (
        <div key={index} onClick={flipped ? null : () => playWord(item.audio)}>
            <div className={styles.container}>
                <a.div
                    className={styles.c}
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                   
                >
                    <Card sx={{ width: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width={160}
                                height={200}
                                image={item.img}
                                alt=""
                            />
                            <CardContent>
                                <div className={styles.btnAndTitle}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.en}
                                    </Typography>
                                    <IconButton onClick={(e) => handlerCardActive(e)}>
                                        <CachedIcon/>
                                    </IconButton>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a.div>
                <a.div
                    className={styles.c}
                    style={{opacity, transform, rotateX: '180deg'}}
                    onMouseLeave={(e) => handlerCard(e)}
                >
                    <Card sx={{ width: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width={160}
                                height={200}
                                image={item.img}
                                alt=""
                            />
                            <CardContent>
                                <div className={styles.btnAndTitle}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.ru}
                                    </Typography>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a.div>
            </div>
        </div>
    );
};

export default TypeCard;