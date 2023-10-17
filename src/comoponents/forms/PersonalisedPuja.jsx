import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../../App.css'

const initialValues = {
    firstName: '',
    lastName: '',
    isMale: false,
    isFemale: false,
    mobileNumber: '',
    email: '',
    message: '',
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobileNumber: Yup.string().matches(/^\d{10}$/, 'Mobile Number must be 10 digits').required('Mobile Number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().max(120, 'Message must be 120 characters or less'),
});

const PersonalisedPuja = () => {
    const handleSubmit = (values) => {
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Box sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box>
                                    <Field as={TextField} name="firstName" label="First Name" variant="standard" fullWidth />
                                    {errors.firstName && touched.firstName && (
                                        <div className="error" style={{ color: 'red' }}>{errors.firstName}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box>
                                    <Field as={TextField} name="lastName" label="Last Name" variant="standard" fullWidth />
                                    {errors.lastName && touched.lastName && (
                                        <div className="error" style={{ color: 'red' }}>{errors.lastName}</div>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>

                        <Box sx={{ marginTop: '16px' }}>
                            <label className='font-nunito-300 form-header' style={{ marginRight: '10px' }}>Gender</label>
                            <Field type="checkbox" name="isMale" /> Male
                            <Field type="checkbox" name="isFemale" /> Female
                        </Box>

                        <Box sx={{ marginTop: '16px' }}>
                            <Field as={TextField} name="mobileNumber" label="Mobile Number" variant="standard" fullWidth />
                            {errors.mobileNumber && touched.mobileNumber && (
                                <div className="error" style={{ color: 'red' }}>{errors.mobileNumber}</div>
                            )}
                        </Box>

                        <Box sx={{ marginTop: '16px' }}>
                            <Field as={TextField} type="email" name="email" label="Email" variant="standard" fullWidth />
                            {errors.email && touched.email && (
                                <div className="error" style={{ color: 'red' }}>{errors.email}</div>
                            )}
                        </Box>

                        <Box sx={{ marginTop: '16px' }}>
                            <Field
                                as={TextField}
                                name="message"
                                label="Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                InputProps={{
                                    sx: {
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                    },
                                }}
                            />
                            <div className="word-counter">
                                {errors.message && touched.message && (
                                    <div className="error" style={{ color: 'red' }}>{errors.message}</div>
                                )}
                            </div>
                        </Box>

                        <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
                            <Button type="submit" className='color-orange' variant="contained" style={{
                                backgroundColor: 'rgb(255, 131, 65)', "&:hover": {
                                    bgcolor: "#FEB66D",
                                    color: "white"
                                }
                            }}>Submit</Button >
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default PersonalisedPuja;
