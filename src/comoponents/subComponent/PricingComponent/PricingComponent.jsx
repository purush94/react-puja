import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '../../../App.css'

import Thali1 from '../../../assets/thali_1.png';
import Thali2 from '../../../assets/thali_2.png';
import Thali3 from '../../../assets/thali_3.png';
import Thali4 from '../../../assets/thali_4.png';

import bg1 from '../../../assets/red.png';
import bg2 from '../../../assets/rust.png';
import bg3 from '../../../assets/brown.png';
import bg4 from '../../../assets/orange.png';

import Background from '../../../assets/pricing_background.png'
import { useNavigate, useParams } from 'react-router-dom';

const colors = ['#64CCC5', '#85E6C5', '#F7E987', '#A1CCD1', '#33D1FF'];

const backgroundImages = [
    {
        heading: `url(${bg1})`,
        title: Thali1,
    },
    {
        heading: `url(${bg2})`,
        title: Thali2,
    },
    {
        heading: `url(${bg3})`,
        title: Thali3,
    },
    {
        heading: `url(${bg4})`,
        title: Thali4,
    },
];

const useStyles = makeStyles({
    pricingCard: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
        width: '23%',
        position: 'relative',
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px'
    },
    pricingHeading: {
        backgroundSize: '100% 100%;',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '4px 4px 0 0',
        position: 'relative',
        height: '250px',
        marginTop: '-2px',
        marginLeft: '-2.3%',
        marginRight: '-2.3%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2px',
        paddingBottom: '10px'
    },
    price: {
        fontSize: '1rem',
        color: 'black',
        position: 'relative',
        zIndex: 1,
        fontFamily: 'Roboto',
    },
    details: {
        fontSize: '1rem',
        fontWeight: 700,
        marginTop: '16px',
        position: 'relative',
        zIndex: 1,
        fontFamily: 'Nunito',
    },
    button: {
        backgroundColor: (props) => props.borderColor,
        borderRadius: '20px',
        color: 'white',
        border: 'none',
        background: 'transparent linear-gradient(180deg, #FF7002 0%, #FF8F39 100%) 0% 0% no-repeat padding-box',
        borderColor: (props) => props.borderColor,
        position: 'relative',
        zIndex: 1,
        marginBottom: '10px'
    },
    backgroundImage: {
        background: (props) => `url(${props.background.title})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
    },
    titleImage: {
        width: '50%',
        height: '50%',
        marginTop: '10px'
    },
});

function PricingCard(props) {
    const msClasses = useStyles(props);
    const navigate = useNavigate();
    const { firstword } = useParams();
    const handleGetStarted = () => {
        navigate('/puja-booking', { state: { title: props.title, price: props.price, fields: props.fields, props: props, url: firstword } });
    };

    return (
        <Paper {...props} elevation={3} className={msClasses.pricingCard} style={{ margin: '5% 0' }}>
            <div className={msClasses.pricingHeading} style={{ backgroundImage: backgroundImages[props.currInd].heading }}>
                <img src={props.background.title} className={msClasses.titleImage} />
                <span className={msClasses.details} style={{ color: 'white', paddingBottom: '5px' }}>{props.title}</span>
                <span className={msClasses.price} style={{ color: 'white', fontWeight: '700' }}>₹{props.price}</span>
            </div>
            <div style={{ padding: '0 20px', marginBottom: '20px' }}>
                {props.fields.map((field, index) => (
                    <p className={msClasses.details} key={index} style={{ textAlign: 'left' }}>
                        <span style={{ fontWeight: 700 }} className='font-nunito-300'>{field}</span>
                    </p>
                ))}
                <Button variant="outlined" className={msClasses.button} onClick={handleGetStarted}>
                    Book Today
                </Button>
            </div>
        </Paper>
    );
}

PricingCard.propTypes = {
    currInd: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    background: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

function PricingComponent({ pujaDetails }) {
    const sortedPujaDetails = pujaDetails.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    return (
        <section style={{ padding: '20px 0', backgroundColor: '#f4f4f4' }}>
            <div style={{ margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', background: `url(${Background})` }}>
                    {sortedPujaDetails.map((detail, index) => (
                        <PricingCard
                            key={`pujaCard-${index}`}
                            currInd={index}
                            title={detail.title}
                            price={detail.price}
                            fields={detail.fields}
                            background={backgroundImages[index]}
                            borderColor={colors[index % colors.length]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

PricingComponent.propTypes = {
    pujaDetails: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
};

export default PricingComponent;
