import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
// import axios from "axios";

const GoogleLogin = () => {

    const { googleLogin } = useAuth();

    const handleGoogleSignIn = () => {
      console.log("Google Sign-In");
      // Implement Google Sign-In logic here
      googleLogin().then((data) => {
        console.log("from google login component:",data)
  
        if (data?.user.email) {
          const userData = {
            email: data?.user?.email,
            name: data?.user?.displayName,
            photoURL: data?.user?.photoURL,
          };

          console.log("User Data:" ,userData);
        //   axios.post("http://localhost:5000/user", userData).then((response) => {
        //     console.log(response.data.token);
        //     localStorage.setItem("token", response?.data?.token);
        //   });
        }
      });
    };

  return (
    <div className="mt-6 flex flex-col space-y-4">
      <button onClick={handleGoogleSignIn} className="w-full btn btn-outline btn-error flex items-center justify-center space-x-2">
        <FaGoogle className="text-lg" />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
