import React from 'react';

interface Props {
  id?: number;
  name: string;
  username: string;
  avater: string;
  isFollowing?: false;
}

const SearchItem: React.FC<Props> = ({name, username, avater}) => {
  return (
    <div className="flex flex-col w-full min-h-[9.13vw]">
      <img
        className="max-w-[15.20vw] max-h-[10.13vw] min-h-[9.13vw] w-full"
        src={avater}
        alt="no imagwe"
      ></img>
      <h1 className="text-[0.93125rem] leading-[150% tracking-[0.139688px] mt-3 text-white">
        {name}
      </h1>
      <span
        className="text-[0.7rem] text-[#B2B2B2] leading-[150%]
        tracking-[0.3725px]"
      >
        {username}
      </span>
    </div>
  );
};
export default SearchItem;
