import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const shema = Yup.object().shape({
  login: Yup.string()
    .required("Please,enter login")
    .test("correct-login", "Correct Login is required", function (value) {
      return value === import.meta.env.VITE_ADMIN_LOGIN;
    }),
  password: Yup.string()
    .required("Please, enter password")
    .test("correct-password", "Correct password is required", function (value) {
      return value === import.meta.env.VITE_ADMIN_PASSWORD;
    }),
});
export default function AdminPanel() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });
  return <div></div>;
}
