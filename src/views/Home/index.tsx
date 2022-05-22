import React from 'react';
import Wrapper from './Wrapper';
import {Outlet, Navigate, useLocation} from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => {
  const location = useLocation();
  const contentContainer =
    location.pathname === '/tags' ?
      'content_tags_container' :
      'content_container';
  return (
    <Wrapper>
      <NavBar></NavBar>
      <div className={contentContainer}>
        {location.pathname !== '/' ? <Outlet /> : <Navigate to={'/main'} />}
      </div>
    </Wrapper>
  );
};
export default Home;
