// lib/validation.ts
import * as yup from "yup";
import { Common } from "../constants";

export const loginSchema = yup.object({
   email: yup
    .string()
    .email("Invalid email")
    .matches(Common.RegularExpression.EmailRegularExp, "Invalid email")
    .max(50, "Email cannot exceed than 50 characters")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .matches(Common.RegularExpression.EmailRegularExp, "Invalid email")
    .max(50, "Email cannot exceed than 50 characters")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const forgotPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .matches(Common.RegularExpression.EmailRegularExp, "Invalid email")
    .max(50, "Email cannot exceed than 50 characters")
    .required("Email is required"),
});
