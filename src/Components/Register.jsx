import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

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
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage(""); // Clear success message if there are validation errors
    } else {
      try {
        if (!email) {
          setErrors({ email: "Email is required" });
          return;
        }

        const response = await axios.post(
          "http://localhost:5000/auth/register",
          {
            username: email.split("@")[0],
            email: email,
            password: password,
            role: role,
            confirm_password: confirmPassword,
          }
        );
        setSuccessMessage("Registration successful! You can now login.");
        setErrors({});
        navigate("/Login");
      } catch (error) {
        setErrors({ apiError: "Failed to register. Please try again later." });
        setSuccessMessage(""); // Clear success message if there is an API error
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-container ">
        <Header />

        <h2>REGISTER</h2>
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
          <div className="form-group">
            <label>
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="form-group">
            <label>
              <b>Role</b>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">
                <b>User</b>
              </option>
              <option value="admin">
                <b>Admin</b>
              </option>
            </select>
            {errors.role && <p className="error">{errors.role}</p>}
          </div>
          <button type="submit" className="btn">
            <b> Register </b>
          </button>
        </form>
        {successMessage && <p className="success">{successMessage}</p>}
        {errors.apiError && <p className="error">{errors.apiError}</p>}
        <p>
          <b>Already have an account?</b>{" "}
          <Link to="/login">
            <b>Login</b>
          </Link>
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
