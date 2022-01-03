import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import  loginValidationSchema  from "./validation";

function LoginPage() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "green" };
  const textFieldStyle = { margin: "10px 0" };
  const errorMessageStyle = {color: 'red'}
  const initialValues = {
    username:'',
    password:''
  }

const onSubmit = (values,props)=>{
    console.log("Values::",values)
}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginValidationSchema}>
          {(props) => (
              <Form>
                  {console.log(props)}
              <Field as={TextField}
                label="User Name"
                name="username"
                placeholder="Enter user name"
                style={textFieldStyle}
                fullWidth
                helperText={<ErrorMessage name='username'/>}
              />
              <Field as={TextField}
                label="Password"
                name="password"
                placeholder="Enter password"
                style={textFieldStyle}
                type="password"
                fullWidth
                helperText={<ErrorMessage name='password'/>}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Form>
          )    
          }
        </Formik>
      </Paper>
    </Grid>
  );
}

export default LoginPage;
