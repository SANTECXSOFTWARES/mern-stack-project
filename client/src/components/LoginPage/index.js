import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Paper
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Form, Formik } from "formik";
import React from "react";
import loginValidationSchema from "./validation";
import Header from "../Header";
import TextFieldWrapper from "../FormsUI/TextField";
import SelectWrapper from "../FormsUI/Select";
import { navigateToHomePage } from "../../routing/navigation";
import optionListConvertor from "../../util/optionListConvertor";
import translateOptions, { translate } from '../../util/translator'

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

function LoginPage(props) {
  const {history} = props;
  const initialValues = {
    username: "",
    password: "",
    userType: "",
  };

  const onSubmit = (values, props) => {
    console.log("Values::", values);
    props.resetForm();
  };

  const classes = useStyles();
  const userType = {
    admin: "Admin",
    faculty: "Faculty",
    student: "Student",
  };

  return (
    <Grid>
      <Grid item xs={12}>
        <Header />
      </Grid>
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
          {({ isValid, dirty }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextFieldWrapper name="username" label="User Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper name="password" label="Password" type="password"/>
                </Grid>
                <Grid item xs={12}>
                  <SelectWrapper
                    name="userType"
                    label="User type"
                    options={translate("userType")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={!dirty || !isValid}
                    onClick={() => navigateToHomePage(history,)}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default LoginPage;
