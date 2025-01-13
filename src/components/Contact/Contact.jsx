import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "@uidotdev/usehooks";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

const contactSchema = Yup.object().shape({
  user_name: Yup.string()
    .required("Full name is required")
    .test("has-space", "It's not a full name", (value) => {
      return value && value.includes(" ");
    }),
  user_email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  user_phone: Yup.string()
    .min(9, "Phone number must contain at least 9 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const isMobile = useMediaQuery("only screen and (max-width: 769px)");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const sendEmail = async (data) => {
    try {
      await emailjs.sendForm(
        "service_ry9628q",
        "template_cqioc5o",
        "#contact-form",
        {
          publicKey: "BAv7Z_KN3xf9qrXNd",
        }
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (err) {
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <div
      className={`${
        isMobile ? "items-center" : "max-w-2xl"
      } w-[1000px] shadow-lg rounded-lg px-10 pt-10`}
    >
      <h1 className="lg:text-[20px] text-[18px] text-light-gradient font-extrabold font-openSans text-[#ffffffe5]">
        Contact
      </h1>

      <form
        id="contact-form"
        onSubmit={handleSubmit(sendEmail)}
        className="space-y-4"
      >
        <div>
          <input
            type="text"
            {...register("user_name")}
            className={`mt-1 px-3 py-2 bg-transparent text-white placeholder:text-[#C4C4C499] border rounded-lg w-[300px] lg:w-full focus:outline-none focus:ring-2 ${
              errors.user_name ? "border-red-500" : "border-[#4D4D4D]"
            } focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Full Name"
          />
          {errors.user_name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.user_name.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            {...register("user_email")}
            className={`mt-1 px-3 py-2 bg-transparent text-white placeholder:text-[#C4C4C499] border rounded-lg w-[300px] lg:w-full focus:outline-none focus:ring-2 ${
              errors.user_email ? "border-red-500" : "border-[#4D4D4D]"
            } focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Email"
          />
          {errors.user_email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.user_email.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="number"
            {...register("user_phone")}
            className={`mt-1 px-3 py-2 bg-transparent text-white placeholder:text-[#C4C4C499] border rounded-lg w-[300px] lg:w-full focus:outline-none focus:ring-2 ${
              errors.user_phone ? "border-red-500" : "border-[#4D4D4D]"
            } focus:ring-blue-500 focus:border-blue-500 no-arrows`}
            placeholder="Phone number"
          />
          {errors.user_phone && (
            <p className="text-red-500 text-sm mt-2">
              {errors.user_phone.message}
            </p>
          )}
        </div>
        <div>
          <textarea
            {...register("message")}
            className={`mt-1 px-3 py-2 bg-transparent text-white placeholder:text-[#C4C4C499] border rounded-lg w-[300px] lg:w-full focus:outline-none focus:ring-2 ${
              errors.message ? "border-red-500" : "border-[#4D4D4D]"
            } focus:ring-blue-500 focus:border-blue-500`}
            rows="5"
            placeholder="Write your message"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <div className="flex lg:justify-end">
          <input
            type="submit"
            value="Send"
            className="px-4 py-2 border-[#4D4D4D] border-[1px] text-[#C4C4C499] w-[25%] lg:w-[35%] rounded-lg hover:text-black hover:bg-[#D7FD44] hover:scale-105 hover:transition-transform cursor-pointer"
          />
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
