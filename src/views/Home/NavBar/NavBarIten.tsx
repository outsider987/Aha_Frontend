import React from 'react';
import {Link} from 'react-router-dom';
import SvgICon from '~/components/SvgIcon';

type Props = {
  iconName: string;
  path: string;
  isFocus: boolean;
  isShow: boolean;
};

const NavBarItem: React.FC<Props> = ({iconName, path, isShow}) => {
  if (!isShow) {
    return <></>;
  }
  return (
    <Link to={path} className="flex flex-col">
      <SvgICon name={iconName} />
      <span>{path}</span>
    </Link>
  );
};
export default NavBarItem;
