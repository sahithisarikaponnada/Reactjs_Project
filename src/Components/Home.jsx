import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import { ThemeContext} from './Themecontext';  

const Home = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //   }
  //   document.body.className = theme; 
  // }, [navigate, theme]);

  const navigateUser = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  const navigateUser1=()=>
  {
    localStorage.removeItem('token');
    navigate('/Dashboard');
  }



  return (
    <div className={`home-container`}>
      <Header className={theme} />
      <div >
      <p id="welcome-text">Welcome to the home page!</p>
      <button onClick={toggleTheme}>Toggletheme </button>
      <Link to="/logout" >
      <button className="btn" onClick={navigateUser}>Logout</button>
      </Link>
      <button className="btn" onClick={navigateUser1}>Dashboard</button> 
      </div>
      <Footer className={theme} />
    </div>
  );
};

export default Home;



  
    
 