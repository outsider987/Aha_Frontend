import React from 'react';

interface Props {
  id?: number;
  name: string;
  count: number;
}

const TagItem: React.FC<Props> = ({name, count}) => {
    const containerClass=`lg:max-w-[16.66vh] lg:min-h-[16.66vh]`;
    const containerMobileGroupClass=`max-w-[18.47vh] min-h-[18.47vh] 
    `;
    const imageGroupClass=`lg:max-w-[16.66vh] lg:max-h-[16.66vh] 
    lg:min-h-[16.66vh]`;
    const imageMobileGroupClass=`max-w-[18.47vh]
     max-h-[18.47vh] min-h-[18.47vh]`;
  return (
    <div className={`flex flex-col w-full ${containerClass} 
    ${containerMobileGroupClass}`}>
      <div
        className={`relative w-full bg-[#262626] rounded-[10px] 
        ${imageGroupClass} ${imageMobileGroupClass}`}
      >
        <div
          className=" text-2xl border-4 border-solid left-[1.11vh] 
        bottom-[1.55vh] rounded-lg border-white absolute font-bold text-white
        leading-[150%] truncate max-w-[13.88vh]"
        >
          {name}
        </div>
      </div>
      <h1
        className="text-[0.93125rem] leading-[150%] truncate
        tracking-[0.139688px] mt-[0.625rem] text-white"
      >
        {name}
      </h1>
      <span
        className="text-[0.7rem] text-[#B2B2B2] leading-[150%]
        tracking-[0.3725px]"
      >
        {count} Results
      </span>
    </div>
  );
};
export default TagItem;
