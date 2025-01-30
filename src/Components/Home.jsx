import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import { ThemeContext} from './Themecontext';  

const Home = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    document.body.className = theme; 
  }, [navigate, theme]);

  return (
    <div className={`home-container`}>
      <Header className={theme} />
      <div >
        <p>Welcome to the home page!</p>
        <button onClick={toggleTheme}>Toggletheme </button>
      <button className="btn">Logout
      <Link to="/logout" ></Link>
      </button>
      </div>
      <Footer className={theme} />
    </div>
  );
};

export default Home;



  
    
 