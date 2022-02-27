import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Field, Form, Formik } from "formik";
import React from "react";
import loginValidationSchema from "./validation";

function LoginPage() {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 300,
    margin: "100px auto",
  };
  const avatarStyle = { backgroundColor: "green" };
  const textFieldStyle = { margin: "10px 0" };

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values, props) => {
    console.log("Values::", values);
    props.resetForm();
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <Field
                as={TextField}
                label="User Name"
                name="username"
                placeholder="Enter user name"
                style={textFieldStyle}
                fullWidth
                error={Boolean(errors.username) && Boolean(touched.username)}
                helperText={Boolean(touched.username) && errors.username}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="Enter password"
                style={textFieldStyle}
                type="password"
                fullWidth
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!dirty || !isValid}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default LoginPage;
