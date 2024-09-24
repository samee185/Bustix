import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import logo from "../assets/BustixLogo.png";
import { useAuth } from "../contexts/AuthContext";
import authImg from "../assets/BustixAuth.jpg";
import UseShowPassword from "../hooks/UseShowPassword";
import { Link } from "react-router-dom";
const LogIn = () => {
  const { login, loading } = useAuth();
  const { showPassword, handleShowPassword } = UseShowPassword();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // form validation

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await login(values);
    },
  });
  return (
    <>
      <div className="bg-[rgba(37,127,230,0.3)] flex items-center lg:gap-10 px-4 lg:px-0 ">
        <div className="hidden lg:block lg:basis-1/2 h-[100vh] overflow-hidden ">
          <img src={authImg} alt="heroimage" className="object-cover" />
        </div>
        <div className="basis-full lg:basis-1/2 px-4 h-[100vh] ">
          <Card
            color="transparent"
            shadow={false}
            className="w-full px-4 py-2 md:px-6 md:py-6"
          >
            <div>
              <div className="flex items-center">
                <img src={logo} alt="bustixlogo" className="h-24" />
                <span className="ml-[-45px] mb-[-45px] text-[24px] font-semibold text-[rgb(4,72,108)]">
                  BusTix
                </span>
              </div>
            </div>
            {/* <Typography
              variant="h4"
              color="blue-gray"
              className="text-center max-w-xs mx-auto"
            >
              Welcome to Bustix
            </Typography> */}
            <Typography
              color="gray"
              className="mt-1 text-[18px] font-bold text-center max-w-xs mx-auto"
            >
              Login To Continue
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-8 mb-2 w-full max-w-md mx-auto"
            >
              <div className="mb-1 flex flex-col gap-6">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-300">{formik.errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Password
                  </Typography>
                  <Input
                    type={`${showPassword ? "text" : "password"}`}
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                  />
                  <span className="absolute top-[50px] right-[25px] cursor-pointer">
                    {showPassword ? (
                      <FaEye
                        color="gray"
                        size={20}
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <FaEyeSlash
                        color="gray"
                        size={20}
                        onClick={handleShowPassword}
                      />
                    )}
                  </span>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-300">{formik.errors.password}</p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="mt-6 w-full"
                fullWidth
                disabled={loading}
              >
                {loading ? <Spinner color="gray" /> : "Login"}
              </Button>

              <p className="mt-3">
                Don't have an account ?{" "}
                <Link to={"/signup"}>
                  <span className="underline">Register Now</span>
                </Link>{" "}
              </p>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LogIn;
