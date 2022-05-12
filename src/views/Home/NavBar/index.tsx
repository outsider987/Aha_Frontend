import React from 'react';
import {routes} from '~/router';
import NavBarItem from './NavBarIten';


const NavBar = () => {
  const mainRoutes = routes[0];

  return (
    <div className='min-h-screen w-auto bg-navbar '>
      {/* desktop */}
      <div className='hidden lg:flex flex-col '>
        {mainRoutes.children.map((item)=>
          <NavBarItem key={item.path} isShow={item.isShow} iconName={item.icon}
            path={item.path} isFocus={true}/>)}
      </div>

    </div>
  );
};
export default NavBar;
