import React from 'react';
import { Link } from 'react-router-dom';
import logo from './learn.png';
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="display-4">Welcome to the Edu-For-Free</h1>
            <p className="lead">We are dedicated to providing free education and empowering individuals to reach their full potential.</p>
            <p>
            Ready to start your free educational journey? 
          </p>
          <div>
            <img src={logo} alt={logo}/>
          </div>
            <div className="btn-group">
              <Link className="btn btn-secondary btn-lg" to="/courses">Available Courses</Link>
            </div>
  
      <footer>
        <p>&copy; 2023 Education For Free. All rights reserved.</p>
      </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
