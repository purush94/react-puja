import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    pricingCard: {
        padding: theme.spacing(3),
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
    },
    pricingHeading: {
        backgroundColor: '#f4f4f4',
        padding: theme.spacing(2),
        borderRadius: '4px 4px 0 0',
    },
    price: {
        fontSize: '1rem',
        color: 'black',
    },
    details: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: theme.spacing(2),
    },
    button: {
        backgroundColor: '#f4f4f4',
        color: '#6b7280',
        marginTop: theme.spacing(2),
    },
}));

function PricingCard(props) {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.pricingCard}>
            <div className={classes.pricingHeading}>
                <Typography variant="h6" className={classes.details}>
                    {/* {props.name} */}
                </Typography>
                <Typography variant="h4" className={classes.price}>
                    {/* {props.price} */}
                </Typography>
            </div>
            {/* {props.fields.map((field, index) => (
                <Typography variant="body1" className={classes.details} key={index}>
                    {field}
                </Typography>
            ))} */}
            <Button variant="outlined" className={classes.button}>
                Get Started
            </Button>
        </Paper>
    );
}

export default function PricingComponent() {
    return (
        <section style={{ paddingTop: '20px', backgroundColor: '#f4f4f4' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around ' }}>
                    <PricingCard
                        name="Plan 1"
                        price="$19"
                        details="Details for Plan 1."
                    />
                    <PricingCard
                        name="Plan 2"
                        price="$29"
                        details="Details for Plan 2."
                    />
                    <PricingCard
                        name="Plan 3"
                        price="$49"
                        details="Details for Plan 3."
                    />
                    <PricingCard
                        name="Plan 4"
                        price="$69"
                        details="Details for Plan 4."
                    />
                </div>
            </div>
        </section>
    );
}
