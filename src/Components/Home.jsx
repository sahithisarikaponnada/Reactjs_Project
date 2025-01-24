import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <p>Welcome to the home page!</p>
      </div>
      <button className="btn">Logout
        <Link to="/logout" className="logout-link"></Link>
      </button>
      <Footer />
    </div>
  );
};

export default Home;

