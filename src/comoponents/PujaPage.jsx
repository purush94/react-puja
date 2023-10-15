import { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system'; import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import db from '../firebase';
import '../App.css'

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
    const [formattedDate, setFormattedDate] = useState('');
    const { firstword } = useParams();
    const navigate = useNavigate();
    const pricingComponentRef = useRef();

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleAddressClick = () => {
        pricingComponentRef.current.scrollIntoView({ behavior: 'smooth' });
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
                // console.log('Collection data: ', data);
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

            if (objectsWithNameFilter.length > 0 && objectsWithNameFilter[0].date) {
                const timestamp = objectsWithNameFilter[0].date.seconds;

                console.log("Timestamp:", timestamp);

                const dateObject = new Date(timestamp * 1000);

                console.log("Date Object:", dateObject);

                const year = dateObject.getFullYear();

                if (year >= 1900 && year <= new Date().getFullYear()) {
                    const day = dateObject.getDate();
                    const month = dateObject.toLocaleString('default', { month: 'long' });

                    const formattedDateString = `${day}, ${month}, ${year}`;
                    setFormattedDate(formattedDateString);
                } else {
                    console.log("Invalid year:", year);
                }
            }
        }
    }, [pujaData]);


    const imageUrl = getImageUrl(firstword);

    return (
        <Box className="puja-container" sx={{ mt: 2 }}>
            {console.log("objectWithName", objectsWithName[0]?.date, formattedDate)}
            <Card style={{ height: '300px', display: 'flex', justifyContent: 'space-between', background: '#FFF4EB 0% 0% no-repeat padding-box', margin: '0 10% 2%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <span className='section-header' style={{ color: '#FE6603' }}>{objectsWithName[0]?.name}</span>
                        <p style={{ color: '#808080', display: 'flex' }}>
                            <IconButton aria-label="play/pause">
                                <LocationOnOutlinedIcon sx={{ height: 15, width: 15, marginRight: '3px' }} />
                            </IconButton>
                            <span className='font-nunito-300 puja-subHeader'>{objectsWithName[0]?.location}, {objectsWithName[0]?.location2}</span>
                        </p>
                        <p style={{ color: '#808080', display: 'flex' }}>
                            <IconButton aria-label="play/pause">
                                <CalendarMonthIcon sx={{ height: 13, width: 13, marginRight: '3px' }} />
                            </IconButton>
                            <span className='font-nunito-300 puja-subContent'>{formattedDate}</span>
                        </p>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 3, pb: 2, mt: 1 }}>
                        <Button variant="contained" style={{
                            backgroundColor: 'rgb(255, 131, 65)', "&:hover": {
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
            <Card style={{ maxHeightheight: '1200px', marginTop: '20px', margin: '0 10%', }}>
                <CardContent>
                    <Box className='puja-body-section'>
                        <Box className='puja-body-header font-roboto-bold menu-header'>
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
                            <AboutPuja aboutData={objectsWithName[0]?.description} aboutHeader={objectsWithName[0]?.aboutHeader} />
                        </div>
                    )}
                    {selectedSection === 'Benefits' && (
                        <div>
                            <Benefits benefitData={objectsWithName[0]?.benefits} />
                        </div>
                    )}
                    {selectedSection === 'Recorded Video' && (
                        <div>
                            {/* Content for Recorded Video section */}
                        </div>
                    )}
                </CardContent>
                <div ref={pricingComponentRef}>
                    <PricingComponent pujaDetails={objectsWithoutName} param={firstword} />
                </div>
            </Card>
        </Box>
    );
}

export default PujaPage;
