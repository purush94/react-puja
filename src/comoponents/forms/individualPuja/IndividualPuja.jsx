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
import db from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const { isFamily } = props;

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
            pujaType: isFamily ? 'family' : 'individual',
            familyMembers: isFamily ? [{ name: '', gotra: '' }] : [],
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
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
                addDoc(collection(db, 'puja'), values);
                resetForm();
                toast.success('Booking confirmed!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setTimeout(() => {
                    navigate(`/`);
                }, 3000);
            } catch (error) {
                console.error('Failed to add doc. ', error);
                toast.error('Booking failed. Please try again later.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
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

    const handleAddFamilyMember = () => {
        if (formik.values.familyMembers.length < 8) {
            formik.values.familyMembers.push({ name: '', gotra: '' });
            formik.setValues({ ...formik.values });
        }
    };

    const handleRemoveFamilyMember = (index) => {
        formik.values.familyMembers.splice(index, 1);
        formik.setValues({ ...formik.values });
    };

    const calculateTotalCost = () => {
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

        return cost;
    };

    const renderFamilyMembers = () => {
        if (isFamily) return null;

        return (
            <Grid item xs={12}>
                {formik.values.familyMembers.map((member, index) => (
                    <Grid container spacing={2} key={index}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label={`Name ${index + 2} of Family Member`}
                                name={`familyMembers[${index}].name`}
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={member.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label={`Gotra of Family Member ${index + 2}`}
                                name={`familyMembers[${index}].gotra`}
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={member.gotra}
                            />
                        </Grid>
                        {index > 0 && (
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => handleRemoveFamilyMember(index)}
                                    sx={{ marginTop: '10px' }}
                                >
                                    Remove
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleAddFamilyMember}
                    >
                        Add Family Member
                    </Button>
                </Grid>
            </Grid>
        );
    };

    return (
        <Card sx={{ margin: '20px', padding: '20px' }}>
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <Typography variant="h5" gutterBottom>
                        {!isFamily ? 'Family Puja' : 'Individual Puja'} Cost - ₹{calculateTotalCost()}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
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
                                name="gotra"
                                variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.gotra}
                                error={formik.touched.gotra && !!formik.errors.gotra}
                                helperText={formik.touched.gotra && formik.errors.gotra}
                            />
                        </Grid>
                        {renderFamilyMembers()}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Dakshina To Pujari (Optional)"
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
                                sx={{
                                    marginTop: '16px',
                                    backgroundColor: '#FEB66D',
                                    '&:hover': {
                                        bgcolor: '#FEB66D',
                                        color: 'white',
                                    },
                                }}
                            >
                                Proceed with ₹{calculateTotalCost()}
                            </Button>
                        </Grid>
                        <ToastContainer />
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
}

export default IndividualPuja;
