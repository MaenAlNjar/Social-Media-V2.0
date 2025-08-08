import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
import apiRequest from "../../lib/apiReq.js"; 

const Login = () => {
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest.post("auth/login", form);
      dispatch(loginSuccess(res.data));
      navigate("/Dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      console.log(form);
      
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="emailOrUsername"
          name="emailOrUsername"
          placeholder="emailOrUsername"
          value={form.emailOrUsername}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
