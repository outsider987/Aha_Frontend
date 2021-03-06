import React, {useEffect, useState} from 'react';
import FollowerItem from '~/components/FollowerItem';
import {useStoreFollower} from '~/store/StoreFollower';
import {Menu} from '~/util/enum/Enum_Followers';
import {useLocation} from 'react-router-dom';

const Follower = () => {
  const location = useLocation();
  const {stateFollower, getFollowerData, getFollowingData} =
    useStoreFollower();
  useEffect(() => {
    getFollowerData(1, 20);
  }, []);
  const menu = Object.values(Menu);

  const [menuIndexState, setmenuIndexState] = useState(
      menu.findIndex((item) => item === Menu.Followers),
  );
  const onMenuClick = (index: number) => {
    setmenuIndexState(index);
    menu[index] === Menu.Followers ?
      getFollowerData(1, 20) :
      getFollowingData(1, 20);
  };

  const renderMenu = () => {
    const disableClass = 'text-[#929292] text-opacity-[0.87] bg-[#1F1F1F]';
    return (
      <div className="flex flex-row w-full max-h-[4.0625rem]">
        {menu.map((item, index) => (
          <span
            onClick={(e) => onMenuClick(index)}
            key={index}
            className={`tracking-[0.15px] cursor-pointer text-base 
            pt-8 pb-[0.6875rem] relative
          font-bold leading-[150%] text-white w-full text-center  `}
          >
            {item}
            <div
              className={`w-full h-[2px] absolute bottom-0 
            bg-white max-h-[4.0625rem] 
            ${menuIndexState !== index && disableClass}`}
            />
          </span>
        ))}
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div className={`mt-8 mx-4 space-y-4 max-h-screen overflow-auto `}>
        {stateFollower.Items?.map((item) => (
          <FollowerItem
            key={item.id}
            name={item.name}
            username={item.username}
            avater={item.avater}
            isFollowing={item.isFollowing}
          />
        ))}
      </div>
    );
  };
  const hiddenClass =
    location.pathname === '/tags' ? ' follower:hidden' : ' follower:flex';
  return (
    <div
      className={`hidden absolute w-[26.04vw] right-0 ${hiddenClass}
  bg-navbar min-h-screen flex-col max-h-screen`}
    >
      {renderMenu()}
      {renderContent()}
    </div>
  );
};
export default Follower;
