import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CustomCard({ title, imageSrc, address }) {
    return (
        <Card sx={{ width: '100%', height: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="210px"
                    image={imageSrc}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">
                        {title}
                    </Typography>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <LocationOnIcon color="disabled" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary">
                                {address}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CustomCard;
