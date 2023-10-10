import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const colors = ['#64CCC5', '#85E6C5', '#F7E987', '#A1CCD1', '#33D1FF'];

const useStyles = makeStyles((theme) => ({
    pricingCard: {
        padding: theme.spacing(3),
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
    },
    pricingHeading: (props) => ({
        backgroundColor: props.backgroundColor,
        padding: theme.spacing(2),
        borderRadius: '4px 4px 0 0',
    }),
    price: {
        fontSize: '1rem',
        color: 'black',
    },
    details: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: theme.spacing(2),
    },
    button: (props) => ({
        backgroundColor: props.borderColor,
        color: 'white',
        marginTop: theme.spacing(2),
        borderColor: props.borderColor,
    }),
}));

function PricingCard(props) {
    const classes = useStyles(props);

    return (
        <Paper elevation={3} className={classes.pricingCard}>
            <div className={classes.pricingHeading}>
                <Typography variant="h6" className={classes.details}>
                    {props.description}
                </Typography>
                <Typography variant="h4" className={classes.price}>
                    ₹{props.price}
                </Typography>
            </div>
            {props.fields.map((field, index) => (
                <Typography variant="body1" className={classes.details} key={index}>
                    &#8226; {field}
                </Typography>
            ))}
            <Button variant="outlined" className={classes.button}>
                Get Started
            </Button>
        </Paper>
    );
}

PricingCard.propTypes = {
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    backgroundColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
};

function PricingComponent({ pujaDetails }) {
    const sortedPujaDetails = pujaDetails.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    return (
        <section style={{ paddingTop: '20px', backgroundColor: '#f4f4f4' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {sortedPujaDetails.map((detail, index) => (
                        <PricingCard
                            key={index}
                            description={detail.description}
                            price={detail.price}
                            fields={detail.fields}
                            backgroundColor={colors[index % colors.length]}
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
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
};

export default PricingComponent;
