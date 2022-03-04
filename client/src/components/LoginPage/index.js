import {
  AppBar,
  Avatar,
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Field, Form, Formik } from "formik";
import React from "react";
import { translate } from "../../util";
import loginValidationSchema from "./validation";

const useStyles = makeStyles((theme) => ({
  avatarStyle: { backgroundColor: theme.palette.primary.main },
  paperStyle: {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "150px auto",
    borderRadius: "10px",
  },
}));

function LoginPage() {

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values, props) => {
    console.log("Values::", values);
    props.resetForm();
  };

  const classes = useStyles();

  return (
    <Grid>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 5 }}>
            {translate("header")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} variant="outlined" className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
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
                variant="outlined"
                label="User Name"
                name="username"
                placeholder="Enter user name"
                fullWidth
                error={Boolean(errors.username) && Boolean(touched.username)}
                helperText={Boolean(touched.username) && errors.username}
                margin="normal"
              />
              <Field
                as={TextField}
                variant="outlined"
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />
              <Field
                as={FormControl}
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Type of user
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={age}
                  // onChange={handleChange}
                  label="Type of user"
                >
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>Faculty</MenuItem>
                  <MenuItem value={3}>Student</MenuItem>
                </Select>
              </Field>
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
