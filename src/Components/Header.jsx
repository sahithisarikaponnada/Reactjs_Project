import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Zensarlogo from "./public/zensarlogo.jpg";

const Header = () => {
  const location = useLocation();

  // let headerText = "Employee Management System";
  // if (location.pathname === "/employee-list") {
  //   headerText = "List of Employees";
  // }

  const renderHeaderContent = () => {
    switch (location.pathname) {
      case "/login":
        return <h1>Employee Management System</h1>;
      case "/register":
        return <h1>Employee Management System</h1>;
      case "/EmployeeList":
        return <h1>LIST OF EMPLOYEES</h1>;
      case "/home":
        return <h1>Employee Management System</h1>;
      case "/EmployeeDetails/:id":
        return <h1>EMPLOYEE DETAILS</h1>;
      default:
        return <h1>Welcome</h1>;
    }
  };

  return (
    <div>
      <header className="Emp-header">
        <Link to="/">
          <img src="/Zensarlogo.jpg" alt="Zensar Logo" />
        </Link>
        {renderHeaderContent()}
      </header>
    </div>
  );
};

export default Header;

{
  /* <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav> */
}
