import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "./Themecontext";

const Home = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // if (!token) {
    //   navigate('/home');
    // }
    document.body.className = theme;
  }, [navigate, theme]);

  const navigateUser = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navigateUser1 = () => {
    localStorage.removeItem("token");
    navigate("/Dashboard");
  };

  const navigateUser2 = () => {
    localStorage.removeItem("token");
    navigate("/EmployeeList");
  };

  return (
    <div className={`home-container`}>
      <Header className={theme} />
      <center>
        <div>
          <p id="welcome-text">
            <u>
              <b>
                <h2>WELCOME TO THE HOME PAGE!</h2>
              </b>
            </u>
          </p>
          <br></br>

          <button className="btn-theme" onClick={toggleTheme}>
            <b>Toggle theme </b>
          </button>
          <br></br>
          <button className="btn" onClick={navigateUser1}>
            Dashboard
          </button>
          <button className="btn" onClick={navigateUser2}>
            Employees Data
          </button>
          <Link to="/logout">
            <button className="btn" onClick={navigateUser}>
              Logout
            </button>
          </Link>
        </div>
      </center>
      <Footer className={theme} />
    </div>
  );
};

export default Home;
