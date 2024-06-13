import { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", { name, email, password });
      history.push("/login");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      <form
        onSubmit={register}
        className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="w-full mb-2 p-2 border rounded"
        />
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
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
