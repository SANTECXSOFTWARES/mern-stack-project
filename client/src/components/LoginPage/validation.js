import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  username: Yup.string().email("Invalid email").required('Please enter email'),
  password: Yup.string().required('Please enter password').min(8,'Password should be 8 characters')
});

export default loginValidationSchema
