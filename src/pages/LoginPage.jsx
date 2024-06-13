import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-4 shadow-md">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome Back</h2>
        <p className="text-gray-600 mb-8 text-center">
          Please login to your account
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email *
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
              Password *
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <button type="submit" className="w-full btn btn-primary">
            Login
          </button>
        </form>

        <div className="mt-6 flex flex-col space-y-4">
          <button className="w-full btn btn-outline flex items-center justify-center space-x-2">
            <FaGoogle className="text-lg" />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
