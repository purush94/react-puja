import React, { useEffect, useState } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    Box,
    Card,
    Grid,
    CardContent,
    Typography,
    Paper,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputAdornment,
    TextField,
    Button,
} from '@material-ui/core';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import '../../App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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

function PujaForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location.state;
    const title = location.state.title;
    const url = location.state.url;
    const [isFamily, setIsFamily] = useState(title.includes('Family'));

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


    const headerStyle = {
        backgroundColor: '#FF8341',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    const optionalOfferingStyle = {
        backgroundColor: '#FFF0D9',
        padding: '10px',
    };

    const circularIconStyle = {
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        padding: '5px',
    };

    const [yajmanDetails, setYajmanDetails] = useState([
        {
            name: '',
            gotra: '',
        },
    ]);

    const addYajmanDetail = () => {
        if (yajmanDetails.length < 7) {
            setYajmanDetails([...yajmanDetails, { name: '', gotra: '' }]);
        }
    };

    const deleteYajmanDetail = (index) => {
        const updatedDetails = [...yajmanDetails];
        updatedDetails.splice(index, 1);
        setYajmanDetails(updatedDetails);
    };

    const [showDakshinaInput, setShowDakshinaInput] = useState(false);
    const [dakshinaAmount, setDakshinaAmount] = useState('');

    const [showVastraOfferingsInput, setShowVastraOfferingsInput] = useState(false);
    const [vastraOfferingsAmount, setVastraOfferingsAmount] = useState('');
    const [vastraOfferingQty, setVastraOfferingQty] = useState()

    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        let formIsValid = true;

        yajmanDetails.forEach((yajman, index) => {
            if (!yajman.name || !yajman.gotra) {
                formIsValid = false;
                errors[`yajman_${index}`] = 'Name and Gotra are required';
            }
        });

        if (showDakshinaInput && !dakshinaAmount) {
            formIsValid = false;
            errors['dakshinaAmount'] = 'Dakshina amount is required';
        }

        if (showVastraOfferingsInput && !vastraOfferingsAmount) {
            formIsValid = false;
            errors['vastraOfferingsAmount'] = 'Vastra Offerings amount is required';
        }

        setFormErrors(errors);
        return formIsValid;
    };

    const handleSubmit = () => {
        setTimeout(() => {
            navigate(`/`);
        }, 2000);
        if (validateForm()) {

            const formData = {
                name: '',
                gotra: '',
                dakshina: showDakshinaInput ? dakshinaAmount : 0,
                phone: '',
                email: '',
                whereFound: '',
                needPrasad: false,
                address: '',
                pujaType: isFamily ? 'family' : 'individual',
                familyMembers: yajmanDetails.map((yajman) => ({
                    name: yajman.name,
                    gotra: yajman.gotra,
                })),
            };
        }

    };

    const handleAddressClick = () => {
        navigate(`/puja/${url}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box className='container-background' sx={{ minHeight: '1200px' }}>
            <form onSubmit={formik.handleSubmit}>
                {/* {console.log("state", state, location.state, location.state.title, isFamily, url)} */}
                <Grid container spacing={2} justifyContent="center" className='main-container' style={{ paddingBottom: '20px' }}>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card style={{ borderRadius: '0' }}>
                                    <CardContent style={{ padding: 0 }}>
                                        <div >
                                            <div style={headerStyle}>
                                                <span className='font-roboto-bold color-white'>Selected Pooja Package</span>
                                            </div>
                                            <p className='font-roboto-bold subSection-header color-orange' style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 15px 0 15px' }}>
                                                <span>{location?.state?.title}</span>
                                                <span>₹ {location?.state?.price}</span>
                                            </p>
                                            <p className='font-nunito-300' style={{ display: 'flex', paddingLeft: '15px', marginTop: '-10px', fontSize: '14px', alignItems: 'center' }}>Puja + Sankalp + Brahman Bhojan + Gau Seva + Deep Daan
                                                <span style={{ padding: '0 0 0 10px', fontSize: '12px', color: '#388CFE', cursor: 'pointer S' }}>View Detailed Offer</span>
                                            </p>
                                            <p className='font-nunito-300' style={{ paddingLeft: '15px', fontSize: '12px', color: '#388CFE', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleAddressClick}>Change Package</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ borderRadius: '0' }}>
                                    <CardContent style={{ padding: 0 }}>
                                        <div style={headerStyle}>
                                            <span className='font-roboto-bold color-white'>Enter Devotee Details</span>
                                        </div>
                                        <div style={{ padding: '15px' }}>
                                            <div className="details-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '2% ' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 32%' }}>
                                                    <span className='font-nunito-300 form-header color-orange'>Enter name</span>
                                                    <TextField
                                                        variant="standard"
                                                        label="Name"
                                                        name="name"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.name}
                                                        error={formik.touched.name && !!formik.errors.name}
                                                        helperText={formik.touched.name && formik.errors.name}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 32%' }}>
                                                    <span className='font-nunito-300 form-header color-orange'>Enter Phone Number</span>
                                                    <TextField
                                                        variant="standard"
                                                        label="Phone"
                                                        name="phone"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.phone}
                                                        error={formik.touched.phone && !!formik.errors.phone}
                                                        helperText={formik.touched.phone && formik.errors.phone}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 32%' }}>
                                                    <span className='font-nunito-300 form-header color-orange'>Enter Email Id</span>
                                                    <TextField
                                                        variant="standard"
                                                        label="Email"
                                                        name="email"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                        error={formik.touched.email && !!formik.errors.email}
                                                        helperText={formik.touched.email && formik.errors.email}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 32%' }}>
                                                    <span className='font-nunito-300 form-header color-orange'>Enter Address</span>
                                                    <TextField
                                                        variant="standard"
                                                        label="Address"
                                                        name="address"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.address}
                                                        error={formik.touched.address && !!formik.errors.address}
                                                        helperText={formik.touched.address && formik.errors.address}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ borderRadius: '0' }}>
                                    <CardContent style={{ padding: 0 }}>
                                        <div style={headerStyle}>
                                            <span className='font-roboto-bold color-white'>Enter Devotee's Family Details ({yajmanDetails.length}/7)</span>
                                        </div>
                                        <div style={{ padding: '15px' }}>
                                            <div className='yajman-details'>
                                                {yajmanDetails.map((yajman, index) => (
                                                    <div key={index} className='yajman-details' style={{ marginTop: '3%', display: 'flex', gap: '10%', marginBottom: '3%' }}>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <span className='font-nunito-300 form-header color-orange'>Name of Yajman</span>
                                                            <TextField
                                                                id={`yajman_name_${index}`}
                                                                variant="standard"
                                                                value={yajman.name}
                                                                onChange={(e) => {
                                                                    const updatedYajmanDetails = [...yajmanDetails];
                                                                    updatedYajmanDetails[index].name = e.target.value;
                                                                    setYajmanDetails(updatedYajmanDetails);
                                                                }}
                                                                error={formErrors[`yajman_${index}`]}
                                                                helperText={formErrors[`yajman_${index}`]}
                                                            />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <span className='font-nunito-300 form-header color-orange'>Gotra</span>
                                                            <TextField
                                                                id={`yajman_gotra_${index}`}
                                                                variant="standard"
                                                                // label="Gotra"
                                                                // name="gotra"
                                                                // onBlur={formik.handleBlur}
                                                                // value={yajman.gotra}
                                                                // onChange={formik.handleChange}
                                                                // error={formik.touched.gotra && !!formik.errors.gotra}
                                                                // helperText={formik.touched.gotra && formik.errors.gotra}
                                                                value={formik.values.gotra}
                                                                onChange={(e) => {
                                                                    const updatedYajmanDetails = [...yajmanDetails];
                                                                    updatedYajmanDetails[index].gotra = e.target.value;
                                                                    setYajmanDetails(updatedYajmanDetails);
                                                                }}
                                                                error={formErrors[`yajman_${index}`]}
                                                                helperText={formErrors[`yajman_${index}`]}
                                                            />
                                                        </div>
                                                        {index > 0 && (
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <IconButton onClick={() => deleteYajmanDetail(index)}>
                                                                    <DeleteOutlineIcon color='warning' sx={circularIconStyle} />
                                                                </IconButton>
                                                                <span className='font-nunito-300 puja-content color-orange'>Delete</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                                {yajmanDetails.length < 7 && (
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        {isFamily &&
                                                            <>
                                                                <IconButton onClick={addYajmanDetail}>
                                                                    <AddIcon color='warning' sx={circularIconStyle} />
                                                                </IconButton>
                                                                <span className='font-nunito-300'>Add More People</span>
                                                            </>
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                            <div className='optional-offering' style={optionalOfferingStyle}>
                                                <p>Other Offerings (Optional)</p>
                                                <FormControl component="fieldset">
                                                    <FormGroup style={{ gap: '10%' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        name="Dakshina"
                                                                        onClick={() => setShowDakshinaInput(!showDakshinaInput)}
                                                                    />
                                                                }
                                                                label={
                                                                    <div>
                                                                        <span className='font-nunito-300 form-header color-orange'>Dakshina to Pujari and Brahmans for Brahman Bhojan{' '}</span><br />
                                                                        {/* <InfoIcon fontSize="small" /> */}
                                                                    </div>
                                                                }
                                                            />
                                                            {showDakshinaInput && (
                                                                <TextField
                                                                    id="dakshina-amount"
                                                                    variant="standard"
                                                                    InputProps={{
                                                                        startAdornment: (
                                                                            <InputAdornment position="start">₹</InputAdornment>
                                                                        ),
                                                                    }}
                                                                    value={dakshinaAmount}
                                                                    onChange={(e) => setDakshinaAmount(e.target.value)}
                                                                    error={formErrors['dakshinaAmount']}
                                                                    helperText={formErrors['dakshinaAmount']}
                                                                />
                                                            )}
                                                        </div>

                                                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20%', alignItems: 'center' }}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        name="Vastra Offerings"
                                                                        onClick={() => setShowVastraOfferingsInput(!showVastraOfferingsInput)}
                                                                    />
                                                                }
                                                                label={
                                                                    <div>
                                                                        <span className='font-nunito-300 form-header color-orange'>
                                                                            Vastra Offering <br />
                                                                            {/* <InfoIcon fontSize="small" /> */}
                                                                        </span>
                                                                    </div>
                                                                }
                                                            />
                                                            {showVastraOfferingsInput && (
                                                                <TextField
                                                                    id="vastra-offerings-qty"
                                                                    variant="standard"
                                                                    type='number'
                                                                    InputProps={{
                                                                        startAdornment: (
                                                                            <InputAdornment position="start"></InputAdornment>
                                                                        ),
                                                                    }}
                                                                    value={vastraOfferingsAmount}
                                                                    onChange={(e) => setVastraOfferingsAmount(e.target.value)}
                                                                    error={formErrors['vastraOfferingsAmount']}
                                                                    helperText={formErrors['vastraOfferingsAmount']}
                                                                />
                                                            )}
                                                            {showVastraOfferingsInput && (
                                                                <TextField
                                                                    id="vastra-offerings-amount"
                                                                    variant="standard"
                                                                    type='number'
                                                                    InputProps={{
                                                                        startAdornment: (
                                                                            <InputAdornment position="start">₹</InputAdornment>
                                                                        ),
                                                                    }}
                                                                    value={vastraOfferingQty}
                                                                    onChange={(e) => setVastraOfferingQty(e.target.value)}
                                                                // error={formErrors['vastraOfferingQty']}
                                                                // helperText={formErrors['vastraOfferingQty']}
                                                                />
                                                            )}
                                                        </div>
                                                    </FormGroup>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper sx={{ margin: '20px', padding: '20px', width: '600px' }}>
                            <Card style={{ borderRadius: '0' }}>
                                <CardContent style={{ padding: 0 }}>
                                    <div style={headerStyle} className='font-roboto-bold color-white'>
                                        <span >Price To Pay</span>
                                    </div>
                                    <div style={{ padding: '15px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2%' }}>
                                            <span>Package Amount</span>
                                            <span>₹ {location?.state?.price}</span>
                                        </div>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            backgroundColor='#FFF0D9'
                                            style={{
                                                backgroundColor: 'rgb(255, 131, 65)',
                                                color: 'white',
                                                marginTop: '2%'
                                            }}
                                        // onClick={handleSubmit}
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                    {/* <ToastContainer /> */}
                </Grid>
            </form>
        </Box>
    );
}

export default PujaForm;
