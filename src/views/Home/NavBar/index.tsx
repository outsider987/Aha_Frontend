import React from 'react';
import {useLocation} from 'react-router-dom';
import SvgICon from '~/components/SvgIcon';
import {routes} from '~/router';
import NavBarItem from './NavBarItem';

const NavBar = () => {
  const mainRoutes = routes[0];
  return (
    <div
      className="w-full min-h-screen bg-navbar
      max-w-navbar_desktop_w hidden lg:block relative "
    >
      <div className="w-[1px] absolute -right-[1px] bg-black bg-opacity-20" />
      {/* desktop */}
      <div className="px-[1.66vw] py-[37px]">
        <div className="mb-[5vh]">
          <SvgICon name="logo" />
        </div>

        <div
          className="hidden lg:flex flex-col
      space-y-6 items-center"
        >
          {mainRoutes.children.map((item) => (
            <NavBarItem
              key={item.path}
              isShow={item.isShow}
              iconName={item.icon}
              path={item.path}
              text={item.text}
              isFocus={useLocation().pathname === `${item.path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
