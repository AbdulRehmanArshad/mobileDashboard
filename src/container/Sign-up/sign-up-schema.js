import * as Yup from "yup";
export const SignUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter email"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
