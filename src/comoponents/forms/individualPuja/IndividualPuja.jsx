import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Card,
    CardContent,
    Checkbox,
    TextField,
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    Typography,
    Grid,
} from '@mui/material';
import db from '../../../firebase'
import { addDoc, collection } from 'firebase/firestore';
import { CollectionsOutlined } from '@mui/icons-material';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    gotra: Yup.string().required('Gotra is required'),
    dakshina: Yup.number().positive('Dakshina must be a positive number'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    whereFound: Yup.string(),
    needPrasad: Yup.boolean(),
    address: Yup.string().when('needPrasad', {
        is: true,
        then: Yup.string().required('Address is required when you need Prasad'),
    }),
    pincode: Yup.number().when('needPrasad', {
        is: true,
        then: Yup.number().required('Pincode is required when you need Prasad'),
    }),
});

function IndividualPuja(props) {
    const [vastraDaanChecked, setVastraDaanChecked] = useState(false);
    const [bhogDaanChecked, setBhogDaanChecked] = useState(false);
    const [silverTongueChecked, setSilverTongueChecked] = useState(false);
    const [totalCost, setTotalCost] = useState(751);

    const formik = useFormik({
        initialValues: {
            name: '',
            gotra: '',
            dakshina: 0,
            phone: '',
            email: '',
            whereFound: '',
            needPrasad: false,
            address: '',
            pincode: '',
            pujaType: 'individual',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("values", values, db)
            let cost = 751;

            if (vastraDaanChecked) {
                cost += 1100;
            }
            if (bhogDaanChecked) {
                cost += 1500;
            }
            if (silverTongueChecked) {
                cost += 1000;
            }

            try {
                addDoc(collection(db, "puja"), values).then(function (yd) {
                    console.log("add 1");
                    console.log(yd);
                    console.log("add 2");
                });
            } catch (e) {
                console.error("Failed to add doc. ", e);
            }
        },
    });

    const handleVastraDaanChange = () => {
        setVastraDaanChecked(!vastraDaanChecked);
    };

    const handleBhogDaanChange = () => {
        setBhogDaanChecked(!bhogDaanChecked);
    };

    const handleSilverTongueChange = () => {
        setSilverTongueChecked(!silverTongueChecked);
    };

    React.useEffect(() => {
        let cost = 751;

        if (vastraDaanChecked) {
            cost += 1100;
        }
        if (bhogDaanChecked) {
            cost += 1500;
        }
        if (silverTongueChecked) {
            cost += 1000;
        }

        setTotalCost(cost);
    }, [vastraDaanChecked, bhogDaanChecked, silverTongueChecked]);

    const renderNameFields = () => {
        if (isFamily) {
            const nameFields = [];
            for (let i = 1; i <= 8; i++) {
                const fieldName = `name${i}`;
                nameFields.push(
                    <Grid item xs={12} key={fieldName}>
                        <TextField
                            fullWidth
                            label={`Name ${i} of Yajman`}
                            id={fieldName}
                            name={fieldName}
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[fieldName]}
                            error={formik.touched[fieldName] && !!formik.errors[fieldName]}
                            helperText={formik.touched[fieldName] && formik.errors[fieldName]}
                        />
                    </Grid>
                );
            }
            return nameFields;
        }
        return (
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Name of Yajman"
                    id="name"
                    name="name"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    error={formik.touched.name && !!formik.errors.name}
                    helperText={formik.touched.name && formik.errors.name}
                />
            </Grid>
        );
    };

    return (
        <Card sx={{ margin: '20px', padding: '20px' }}>
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <Typography variant="h5" gutterBottom>
                        {/* {isFamily ? 'Family Puja' : 'Individual Puja'} Cost - ₹{totalCost} */}
                        Individual Puja Cost - ₹{totalCost}
                    </Typography>
                    <Grid container spacing={2}>
                        {/* {renderNameFields()} */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name of Yajman"
                                id="name"
                                name="name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                error={formik.touched.name && !!formik.errors.name}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Gotra"
                                id="gotra"
                                name="gotra"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.gotra}
                                error={formik.touched.gotra && !!formik.errors.gotra}
                                helperText={formik.touched.gotra && formik.errors.gotra}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Dakshina To Pujari (Optional)"
                                id="dakshina"
                                name="dakshina"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dakshina}
                                error={formik.touched.dakshina && !!formik.errors.dakshina}
                                helperText={formik.touched.dakshina && formik.errors.dakshina}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormGroup>
                                    <Typography variant="subtitle1">Optional Offerings:</Typography>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="vastraDaan"
                                                name="vastraDaan"
                                                onChange={handleVastraDaanChange}
                                                checked={vastraDaanChecked}
                                            />
                                        }
                                        label="Vastra Daan - ₹1100"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="bhogDaan"
                                                name="bhogDaan"
                                                onChange={handleBhogDaanChange}
                                                checked={bhogDaanChecked}
                                            />
                                        }
                                        label="Bhog Daan - ₹1500"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="silverTongue"
                                                name="silverTongue"
                                                onChange={handleSilverTongueChange}
                                                checked={silverTongueChecked}
                                            />
                                        }
                                        label="Silver Tongue - ₹1000"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Phone"
                                id="phone"
                                name="phone"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                error={formik.touched.phone && !!formik.errors.phone}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                id="email"
                                name="email"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && !!formik.errors.email}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Where did you find out about us?"
                                id="whereFound"
                                name="whereFound"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.whereFound}
                                error={formik.touched.whereFound && !!formik.errors.whereFound}
                                helperText={formik.touched.whereFound && formik.errors.whereFound}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="needPrasad"
                                        name="needPrasad"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.needPrasad}
                                    />
                                }
                                label="Do you need Prasad?"
                            />
                        </Grid>
                        {formik.values.needPrasad && (
                            <>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        id="address"
                                        name="address"
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address}
                                        error={formik.touched.address && !!formik.errors.address}
                                        helperText={formik.touched.address && formik.errors.address}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Pincode"
                                        id="pincode"
                                        name="pincode"
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.pincode}
                                        error={formik.touched.pincode && !!formik.errors.pincode}
                                        helperText={formik.touched.pincode && formik.errors.pincode}
                                    />
                                </Grid>
                            </>
                        )}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ marginTop: '16px' }}
                            >
                                Proceed with ₹{totalCost}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
}

export default IndividualPuja;
