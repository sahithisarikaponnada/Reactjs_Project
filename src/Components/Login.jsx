import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Login = (props) => {
  // console.log(props.setUser);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:5000/auth/login", {
          username: email.split("@")[0],
          email: email,
          password: password,
        });
        //   props.setUser(email)
        //  console.log(response)
        //  console.log(response.data)
        if (response.status === 200) {
          localStorage.setItem("token", response.data.access_token);
          setSuccessMessage("Login successful!");
          setErrors({});
          navigate("/home");
        }

        //localStorage.setItem('token', response.data.access_token);
        //setSuccessMessage('Login successful!');
        //setErrors({});
        // Redirect to home page
        // navigate('/home');
      } catch (error) {
        // console.log(error);
        setErrors({ apiError: "Failed to login. Please try again later." });
      }
    }
  };

  return (
    <div className="login-page">
      <Header />

      <div className="login-container">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="btn">
            <b>Login</b>
          </button>
        </form>
        {successMessage && <p className="success">{successMessage}</p>}
        {errors.apiError && <p className="error">{errors.apiError}</p>}
        <p>
          <b>Don't have an account?</b>{" "}
          <Link to="/register">
            <b>Register</b>
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
