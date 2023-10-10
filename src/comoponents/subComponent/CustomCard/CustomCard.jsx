import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../../../App.css'

function CustomCard({ title, imageSrc, address }) {
    const navigate = useNavigate();

    const handleAddressClick = () => {
        const parts = address.split(',');
        const firstPart = parts[0].trim();
        const words = firstPart.split(' ');
        const param = words.length > 1 ? words.map(word => word.toLowerCase()).join('-') : firstPart.toLowerCase();

        console.log(param)
        navigate(`/puja/${param}`);
    };

    return (
        <Card sx={{ width: '100%', height: '100%' }}>
            <CardActionArea onClick={handleAddressClick}>
                <CardMedia
                    component="img"
                    height="344apx"
                    width="432px"
                    image={imageSrc}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" className='font-roboto-bold'>
                        {title}
                    </Typography>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <LocationOnIcon color="disabled" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary" className='font-roboto-regular'>
                                {address}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

CustomCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};

export default CustomCard;
