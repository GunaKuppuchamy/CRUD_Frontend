import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Input() {

    // const [title, setTitle] = useState("");
    // const [desc, setDesc] = useState("");
    // const [rs, setRs] = useState(0);
    // const handleChange = () => {
    //     let obj = {
    //         id: uuidv4(),
    //         title: title,
    //         desc: desc,
    //         amount: rs
    //     }


    // }

    return (
        <div >

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>





            {/* <div ><input type='text' id='title' onChange={(e) => setTitle(e.target.value)} /></div>
            <div ><input type='text' onChange={(e) => setDesc(e.target.value)} /></div>
            <div ><input type='text' onChange={(e) => setRs(e.target.value)} /></div>

            <button onClick={() => handleChange()}>Add</button> */}

        </div>
    )
}

export default Input
