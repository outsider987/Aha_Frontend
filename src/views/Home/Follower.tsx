import React, {useState} from 'react';
import FollowerItem from '~/components/FollowerItem';
import {Menu} from '~/util/enum/Enum_Followers';

const Follower = () => {
  const menu = Object.values(Menu);

  const [menuIndexState, setmenuIndexState] = useState(
      menu.findIndex((item) => item === Menu.Followers),
  );
  const onMenuClick = (index: number) => {
    setmenuIndexState(index);
  };

  const renderMenu = () => {
    const disableClass = 'text-[#929292] opacity-[0.87] border-greyscale';
    return (
      <div className="flex flex-row w-full ">
        {menu.map((item, index) => (
          <span
            onClick={(e) => onMenuClick(index)}
            key={index}
            className={`tracking-[0.15px] cursor-pointer text-base 
            pt-[3.55vh] pb-[1.44vh]
          font-bold leading-[150%] text-white w-full text-center border-b-2
           border-white border-solid ${
          menuIndexState !== index && disableClass
          }`}
          >
            {item}
          </span>
        ))}
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div className=" my-8 mx-4">
        <FollowerItem isFollowing={false}/>
      </div>
    );
  };
  return (
    <div
      className="hidden absolute w-[26.04vw] right-0  follower:flex
  bg-navbar min-h-screen flex-col"
    >
      {renderMenu()}
      {renderContent()}
    </div>
  );
};
export default Follower;
