import React from 'react';
import {Link} from 'react-router-dom';
import SvgICon from '~/components/SvgIcon';

type Props = {
  iconName: string;
  path: string;
  text: string;
  isFocus: boolean;
  isShow: boolean;
};

const NavBarItem: React.FC<Props> = ({
  iconName,
  path,
  isShow,
  isFocus,
  text,
}) => {
  if (!isShow) {
    return <></>;
  }
  return (
    <Link
      to={path}
      className="flex flex-col justify-center relative 
    items-center"
    >
      <SvgICon
        name={iconName}
        className={`justify-center relative ${
          isFocus ? 'text-white' : 'text-[#6A6A6A]'
        }`}
      >
        {!isFocus && (
          <div
            className="absolute  -right-[16.6%] -top-[20.83%] w-[22%] h-[22%]
        bg-navBarUnFocusBlue rounded-full"
          />
        )}
      </SvgICon>

      <span
        className="min-h-[18px] tracking-[0.4px] text-xs text-center
        leading-[150%] text-white"
      >
        {isFocus && text}
      </span>
    </Link>
  );
};
export default NavBarItem;
