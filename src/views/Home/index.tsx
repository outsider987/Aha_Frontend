import React from 'react';
import Wrapper from './Wrapper';
import {Outlet} from 'react-router-dom';

const Home = () => {
  return (
    <Wrapper>
      {/* desktop */}
      <Outlet />

    </Wrapper>
  );
};
export default Home;
