import React from 'react';
import {useLocation} from 'react-router-dom';
import SvgICon from '~/components/SvgIcon';
import {routes} from '~/router';
import NavBarItem from './NavBarItem';

const NavBar = () => {
  const mainRoutes = routes[0];
  console.log(useLocation().pathname);
  return (
    <div
      className="w-full min-h-screen bg-navbar border-solid
      max-w-navbar_desktop_w
    border-r-1 border-black border-opacity-20"
    >
      {/* desktop */}
      <div
        className="hidden lg:flex flex-col px-6 py-9
      space-y-[4.7vh]  "
      >
        <SvgICon name="logo" />
        {mainRoutes.children.map((item) => (
          <NavBarItem
            key={item.path}
            isShow={item.isShow}
            iconName={item.icon}
            path={item.path}
            text={item.text}
            isFocus={useLocation().pathname === `/${item.path}`}
          />
        ))}
      </div>
    </div>
  );
};
export default NavBar;
