import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      if (res.data === "User exists") {
        navigate("/home", { state: { id: email } });
      } else {
        alert("User has not signed up");
      }
    } catch (e) {
      alert("Wrong Details");
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-orange-200 p-8 rounded-lg shadow-xl max-w-md w-full ">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login to your Account
        </h1>
        <img
          className="p-3 rounded-2xl "
          src="https://media.licdn.com/dms/image/C5612AQFN40Wk2QqUWQ/article-cover_image-shrink_600_2000/0/1520185626909?e=2147483647&v=beta&t=I5RIGaNcW9JsCCOtEsGtGEaVGRjSK1KFKLBMUzYv1-k"
        />
        <form onSubmit={submit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">OR</p>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
