
import { Box, Card, CardContent } from '@mui/material';
import GowShala from '../../../assets/cows-green-field-sunny-day.jpg';
import '../../../App.css'
import Pre from '../../../assets/preHeader.svg'
import Post from '../../../assets/postHeader.svg'

function DonationsCards() {
    const cards = [
        {
            id: 1,
            backgroundImage: `url(${GowShala})`,
            text: 'GAUSHALA',
        },
        // {
        //     id: 2,
        //     backgroundImage: 'url("../../assets/cows-green-field-sunny-day.jpg")',
        //     text: 'Kanwad Yatra',
        // },
    ];

    const handleCardClick = (cardId) => {
        console.log(`Clicked on card with ID: ${cardId}`);
    };

    return (
        <Box className="body-donations-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box className="body-description-header">
                <img src={Pre} alt="Before Image" className='header-image' />
                {/* <Typography variant="h5" style={{ fontWeight: 'bold' }} className='font-montserrat-regular'>
                    Donations
                </Typography> */}
                <span className='font-playfair-regular section-header'>Donations</span>
                <img src={Post} alt="Before Image" className='header-image' />
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                gap={2}
                marginTop={2}
            >
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        style={{
                            width: 600,
                            height: 350,
                            position: 'relative',
                            cursor: 'pointer',
                            overflow: 'hidden',
                        }}
                        onClick={() => handleCardClick(card.id)}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: card.backgroundImage,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'absolute',
                            }}
                        />
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                padding: '10px',
                                color: 'white',
                            }}
                        >
                            {/* <Typography variant="h6" style={{ fontWeight: 'bold' }} className=''>
                                {card.text}
                            </Typography> */}
                            <span className='font-roboto-regular section-header'>{card.text}</span>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default DonationsCards;
