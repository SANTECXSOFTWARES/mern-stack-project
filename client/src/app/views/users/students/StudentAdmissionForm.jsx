import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Stack,
    Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import { Form, Formik } from 'formik'
import TextfieldWrapper from 'app/components/FormUI/Textfield'
import * as Yup from 'yup'
import ButtonWrapper from 'app/components/FormUI/Button'
import SendIcon from '@mui/icons-material/Send'
import DeleteIcon from '@mui/icons-material/Delete'
import DateTimePicker from 'app/components/FormUI/DataTimePicker'

const StudentAdmissionForm = () => {
    // const [state, setState] = useState({
    //     date: new Date(),
    // })

    const onSubmit = (values) => {
        console.log("submitted", values);
    }

    const INITIAL_FORM_STATE = {
        firstName: '',
        lastName: '',
        // email: '',
        // phone: '',
        // addressLine1: '',
        // addressLine2: '',
        // city: '',
        // state: '',
        // country: '',
        // arrivealDate: '',
        // departureDate: '',
        // message: '',
        // termsOfService: false,
    }

    const FORM_VALIDATION = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        // email: Yup.string().email('Invalid email.').required('Required'),
        // phone: Yup.number()
        //     .integer()
        //     .typeError('Please enter a valid phone number')
        //     .required('Required'),
        // addressLine1: Yup.string().required('Required'),
        // addressLine2: Yup.string(),
        // city: Yup.string().required('Required'),
        // state: Yup.string().required('Required'),
        // country: Yup.string().required('Required'),
        // arrivealDate: Yup.date().required('Required'),
        // departureDate: Yup.date().required('Required'),
        // message: Yup.string(),
        // termsOfService: Yup.boolean()
        //     .oneOf([true], 'The terms and conditions must be accepted.')
        //     .required('The terms and conditions must be accepted.'),
    })

    return (
        <div>
            <Formik
                initialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={FORM_VALIDATION}
                onSubmit={onSubmit}
            >
                <Form>
                    <Typography variant="h4" component="h2">STUDENT ADMISSION</Typography>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="firstName"
                                label="First Name"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="lastName"
                                label="Last Name"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="class"
                                label="Class"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="aadharNumber"
                                label="Aadhar number"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <DateTimePicker
                                name="dob"
                                label="Date of birth (DOB)"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="placeOfBirth"
                                label="Place of birth"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="state"
                                label="State"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="nationality"
                                label="Nationality"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="religion"
                                label="Religion"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="gender"
                                label="Gender"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="caste"
                                label="Caste"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="address"
                                label="Address"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="bloodGroup"
                                label="Blood group"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="pinCode"
                                label="Pin code"
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 1 }}>
                            <TextfieldWrapper
                                name="mobile"
                                label="Mobile number"
                            />
                        </Grid>
                        <Grid item xs={6} sm={12} md={6} lg={8}>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    endIcon={<SendIcon />}
                                >
                                    Submit
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </div>
    )
}

export default StudentAdmissionForm
