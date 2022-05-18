import React from 'react';
import Button from './Button';

const FollowerItem = () => {
  const renderFollow = () => {
    return (
      <Button
        className="text-xs py-2 px-[0.625rem]"
        isRounded={true}
        isWhite={false}
      >
        Follow
      </Button>
    );
  };
  return (
    <div className="flex flex-row items-center">
      <img alt="null" />
      <div className=" flex flex-col">
        <span className="text-base text-white tracking-[0.15px]">
          Full name
        </span>
        <span className="text-white text-opacity-50 tracking-[0.25px]">
          @username
        </span>
      </div>
      {renderFollow()}
    </div>
  );
};
export default FollowerItem;
