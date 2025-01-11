import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  user_name: Yup.string()
    .required("Full name is required")
    .test("has-space", "It's not a full name", (value) => {
      return value && value.includes("");
    }),
  user_email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  user_phone: Yup.string()
    .min(9, "Phone number must contain at least 9 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});
