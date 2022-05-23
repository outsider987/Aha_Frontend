import React from 'react';

interface Props {
  id?: number;
  name: string;
  username: string;
  avater: string;
  isFollowing?: false;
}

const SearchItem: React.FC<Props> = ({name, username, avater}) => {
  const containerClass = 'lg:min-h-[9.13vw]';
  const imgClass = 'lg:max-w-[15.20vw] lg:max-h-[10.13vw] lg:h-[9.13vw]';
  const imgMobileClass = 'h-[27.42vh]';
  return (
    <div
      className={`flex flex-col w-full ${containerClass}`}
    >
      <img
        className={`w-full h-full ${imgClass} ${imgMobileClass}`}
        src={avater}
        alt="no imagwe"
      ></img>
      <h1
        className="text-[0.93125rem] leading-[150% tracking-[0.139688px]
       mt-5 lg:mt-3 text-white"
      >
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
