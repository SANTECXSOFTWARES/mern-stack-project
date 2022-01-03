import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  username: Yup.string().email("Enter valid email/username").required('Required'),
  password: Yup.string().required('Required')
});

export default loginValidationSchema
