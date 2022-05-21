import React, {useEffect, useState} from 'react';
import FollowerItem from '~/components/FollowerItem';
import {useStoreFollower} from '~/store/StoreFollower';
import {Menu} from '~/util/enum/Enum_Followers';
import {InterFollowerItem} from '~/store/StoreFollower';
import {useLocation} from 'react-router-dom';


const Follower = () => {
  const location = useLocation();
  const {stateFollower, getFollowerData} = useStoreFollower();
  useEffect(() => {
    getFollowerData(1, 20);
  }, []);
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
    const filterFloower = (item: InterFollowerItem) => {
      if (menu[menuIndexState] === Menu.Followers) return true;
      if (
        menu[menuIndexState] === Menu.Following &&
        item.isFollowing === true
      ) {
        return true;
      }
    };

    return (
      <div className={`mt-8 mx-4 space-y-4 max-h-screen overflow-auto `}>
        {stateFollower.Items?.filter(filterFloower).map((item) => (
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
  const hiddenClass = location.pathname === '/tags'? 'hidden' : 'flex';
  return (
    <div
      className={`hidden absolute w-[26.04vw] right-0  follower:${hiddenClass}
  bg-navbar min-h-screen flex-col max-h-screen`}
    >
      {renderMenu()}
      {renderContent()}
    </div>
  );
};
export default Follower;
