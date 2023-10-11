import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system'; import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from '@mui/material';
import './PujaPage.css'
import AboutPuja from './subComponent/AboutPuja/AboutPuja';
import Benefits from './subComponent/Benefits/Benefits';
import PricingComponent from './subComponent/PricingComponent/PricingComponent';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import Jwaladevi from '../assets/jwala.jpeg';
import NainaDevi from '../assets/naina.jpeg';
import Baglamukhi from '../assets/baglamukhi.jpeg';
import db from '../firebase';

const getImageUrl = (firstword) => {
    switch (firstword) {
        case 'naina-devi':
            return NainaDevi;
        case 'jwala-devi':
            return Jwaladevi;
        case 'baglamukhi-temple':
            return Baglamukhi;
        default:
            return '';
    }
};

function PujaPage() {
    const [selectedSection, setSelectedSection] = useState('About');
    const [pujaData, setPujaData] = useState();
    const [objectsWithName, setObjectsWithName] = useState([]);
    const [objectsWithoutName, setObjectsWithoutName] = useState([]);
    const { firstword } = useParams();
    const navigate = useNavigate();
    console.log(firstword)

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleAddressClick = () => {
        navigate(`/puja-booking`);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, firstword));
                const data = querySnapshot.docs.map((doc) => doc.data());
                setPujaData(data)
                console.log('Collection data: ', data);
            } catch (error) {
                console.error('Error fetching collection: ', error);
            }
        };

        fetchData();
    }, [firstword])

    useEffect(() => {
        if (Array.isArray(pujaData)) {
            const objectsWithNameFilter = pujaData.filter((obj) => obj.name);
            const objectsWithoutNameFilter = pujaData.filter((obj) => !obj.name);

            setObjectsWithName(objectsWithNameFilter);
            setObjectsWithoutName(objectsWithoutNameFilter);
        }
    }, [pujaData]);


    const imageUrl = getImageUrl(firstword);
    console.log("73", pujaData, objectsWithName, objectsWithoutName)

    return (
        <Box className="puja-container" sx={{ mt: 2 }}>
            <Card style={{ height: '300px', display: 'flex', justifyContent: 'space-between', margin: '0 10%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" sx={{ pl: 2 }}>
                            {objectsWithName[0]?.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <IconButton aria-label="play/pause">
                                <LocationOnOutlinedIcon sx={{ height: 15, width: 15, marginLeft: '10px' }} />
                            </IconButton>
                            {objectsWithName[0]?.location}
                        </Typography>
                        <Typography component="div" variant="subtitle2" sx={{ pl: 2 }}>
                            Date: 01, October 2023
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 4, pb: 2, mt: 1 }}>
                        <Button variant="contained" sx={{
                            backgroundColor: '#FEB66D', "&:hover": {
                                bgcolor: "#FEB66D",
                                color: "white"
                            }
                        }} onClick={handleAddressClick}>Book Now</Button>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 400, objectFit: 'cover' }}
                    image={imageUrl}
                    alt="Puja Image"
                />
            </Card>
            <Card style={{ height: '1000px', marginTop: '20px', marginLeft: '4%', marginRight: '4%' }}>
                <CardContent>
                    <Box className='puja-body-section'>
                        <Box className='puja-body-header'>
                            <Box
                                onClick={() => handleSectionClick('About')}
                                className={selectedSection === 'About' ? 'selected' : ''}
                            >
                                About
                            </Box>
                            <Box
                                onClick={() => handleSectionClick('Benefits')}
                                className={selectedSection === 'Benefits' ? 'selected' : ''}
                            >
                                Benefits
                            </Box>
                            <Box
                                className='disabled'
                            >
                                Recorded Video
                            </Box>
                        </Box>
                    </Box>
                    {selectedSection === 'About' && (
                        <div>
                            <AboutPuja />
                        </div>
                    )}
                    {selectedSection === 'Benefits' && (
                        <div>
                            <Benefits />
                        </div>
                    )}
                    {selectedSection === 'Recorded Video' && (
                        <div>
                            {/* Content for Recorded Video section */}
                        </div>
                    )}
                </CardContent>
                <PricingComponent pujaDetails={objectsWithoutName} />
            </Card>
        </Box>
    );
}

export default PujaPage;
