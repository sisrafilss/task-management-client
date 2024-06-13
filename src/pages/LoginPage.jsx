// import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      history.push("/dashboard");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      <form
        onSubmit={login}
        className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
