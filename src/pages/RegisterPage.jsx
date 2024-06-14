import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  const { createUser, } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (password) {
      setPasswordMatch(password === confirmPassword);
    }
  }, [password, confirmPassword]);

  const onSubmit = (data) => {
    console.log(data);
    // Simulate registration and error handling
    if (data.password !== data.confirmPassword) {
      // setRegistrationError("Passwords do not match. Please try again.");
    } else {
      // setRegistrationError("");
      console.log("Registration successful");
      // Redirect or perform post-registration actions here
      createUser(data?.email, data?.password).then((response) => {
        if (response?.user.email) {
          const userData = {
            email: response?.user?.email,
            name: data?.name,
          };

          console.log("User Data:", userData);
          // axios
          //   .post("http://localhost:5000/user", userData)
          //   .then((response) => {
          //     console.log(response.data.token);
          //     localStorage.setItem("token", response?.data?.token);
          //   });
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Create an Account
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Join us and manage your tasks efficiently
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
            {!passwordMatch && (
              <span className="text-red-500 text-sm">
                Passwords do not match
              </span>
            )}
          </div>

          <button type="submit" className="w-full btn btn-primary">
            Register
          </button>
        </form>

        <GoogleLogin />

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
