import React from 'react';
import Wrapper from './Wrapper';
import {Outlet, Navigate, useLocation} from 'react-router-dom';
import NavBar from './NavBar';
import Follower from './Follower';

const Home = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Follower />
      <NavBar></NavBar>
      <div className="AhaContainer">
        {location.pathname !== '/' ? <Outlet /> : <Navigate to={'/main'} />}
      </div>
    </Wrapper>
  );
};
export default Home;
