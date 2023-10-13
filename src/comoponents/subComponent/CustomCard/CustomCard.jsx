import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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

        // console.log(param)
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
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, paddingLeft: '10px', height: '100px', background: 'transparent linear-gradient(180deg, #FFFFFF00 0%, #FAA03060 100%)' }}>
                    <Typography gutterBottom variant="h6" className='font-roboto-bold' sx={{ fontWeight: 700 }}>
                        {title}
                    </Typography>
                    <span></span>
                    <Grid container spacing={1} sx={{ height: '50px', paddingLeft: '0px', alignItems: 'flex-start' }}>
                        <Grid item sx={{ padding: 0 }}>
                            <LocationOnIcon color="disabled" sx={{ height: '20px', padding: '0px' }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary" className='font-roboto-regular'>
                                {address}
                            </Typography>
                            <span></span>
                        </Grid>
                    </Grid>
                    {/* <Grid container spacing={1} sx={{ height: '50px', paddingLeft: '0px', marginBottom: '5px', alignItems: 'center' }}>
                        <Grid item sx={{ padding: 0 }}>
                            <CalendarMonthIcon color="disabled" sx={{ height: '15px', padding: '0px' }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary" className='font-roboto-regular' sx={{ fontWeight: 700, size: '15px' }}>
                                29/12/2024
                            </Typography>
                            <span></span>
                        </Grid>
                    </Grid> */}
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
