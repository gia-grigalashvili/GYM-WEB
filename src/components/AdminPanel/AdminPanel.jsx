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
  const onSubmit = async () => {
    navigate("/admin-dashboard");
  };
  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDkya3Rid3J1a214cHVoZmV0aDNnaGN6anc3bW12NXV4MXRnYXV3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qrBN3xzrJ0EHMqw0km/giphy.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#1E1E1E] p-8 rounded-lg shadow-md space-y-6 lg:w-[30%] h-[300px]"
        >
          <h2 className="text-center text-[#D7FD44] font-semibold text-2xl mb-4">
            Admin Panel Login
          </h2>

          <div>
            <input
              type="text"
              {...register("login")}
              placeholder="Login (admin)"
              className="w-full px-4 py-2 rounded-md bg-[#2A2A2A] text-[#C4C4C4] placeholder-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#D7FD44] border border-[#3A3A3A]"
            />
            {errors.login && (
              <p className="mt-2 text-red-500">{errors.login.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password (admin)"
              className="w-full px-4 py-2 rounded-md bg-[#2A2A2A] text-[#C4C4C4] placeholder-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#D7FD44] border border-[#3A3A3A]"
            />
            {errors.password && (
              <p className="mt-2 text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-[#121212] bg-[#D7FD44] rounded-md font-semibold hover:bg-[#c2ed38] transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
