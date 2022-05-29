import React from 'react';
import Button from './Button';

interface Props {
  isFollowing: boolean;
  name: string;
  username: string;
  avater: string;
}

const FollowerItem: React.FC<Props> = ({
  isFollowing,
  name,
  username,
  avater,
}) => {
  return (
    <div className="flex flex-row items-center justify-between ">
      <div className="flex flex-row space-x-[0.9375rem] items-center ">
        <img
          src={avater}
          className=" max-h-10 max-w-[2.5rem] w-10 h-10 border
          border-solid border-[#F8F8F8] rounded-md "
        />
        <div className=" flex flex-col min-h-[45px] justify-between">
          <span
            className="text-base text-white tracking-[0.15px]
          whitespace-nowrap"
          >
            {name}
          </span>
          <span
            className="text-white text-opacity-50 tracking-[0.25px]
          text-sm"
          >
            @{username}
          </span>
        </div>
      </div>

      <Button
        className="text-xs py-2 px-[0.625rem] "
        isRounded={true}
        isWhite={isFollowing}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </div>
  );
};
FollowerItem.defaultProps = {isFollowing: false};
export default FollowerItem;
