import React from 'react';
import Button from './Button';

interface Props{
    isFollowing:boolean;
}

const FollowerItem:React.FC<Props> = ({isFollowing}) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className='flex flex-row space-x-[0.9375rem] items-center'>
        <img className=' max-h-10 max-w-10' alt="null" />
        <div className=" flex flex-col">
          <span className="text-base text-white tracking-[0.15px]">
            Fullname
          </span>
          <span className="text-white text-opacity-50 tracking-[0.25px]">
            @username
          </span>
        </div>
      </div>

      <Button
        className="text-xs py-2 px-[0.625rem] "
        isRounded={true}
        isWhite={isFollowing}
      >
        {isFollowing?'Following':'Follow'}
      </Button>
    </div>
  );
};
FollowerItem.defaultProps={isFollowing:false}
export default FollowerItem;
