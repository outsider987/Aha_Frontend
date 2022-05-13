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
          isFocus ? 'text-white' : 'text-gray-600'
        }`}
      >
        {!isFocus && (
          <div
            className="absolute  -right-[16.6%] -top-[20.83%] w-[25%] h-[25%]
        bg-navBarUnFocusBlue rounded-full"
          />
        )}
      </SvgICon>

      <span
        className="min-h-[2vh] tracking-[0.1em] text-xs text-center
       text-white"
      >
        {isFocus && text}
      </span>
    </Link>
  );
};
export default NavBarItem;
