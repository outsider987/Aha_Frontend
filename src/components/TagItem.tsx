import React from 'react';

interface Props {
  id?: number;
  name: string;
  count: number;
}

const TagItem: React.FC<Props> = ({name, count}) => {
  const containerClass = `lg:max-w-[9.375rem] lg:max-h-[12.4375rem] 
  lg:min-h-[9.375rem]`;
  const containerMobileGroupClass = `max-w-[18.47vh] min-h-[18.47vh] `;
  const imageGroupClass = `lg:max-w-[9.375rem] lg:max-h-[9.375rem] 
    lg:min-h-[9.375rem]`;
  const imageMobileGroupClass = `max-w-[18.47vh]
     max-h-[18.47vh] min-h-[18.47vh]`;
  return (
    <div
      className={`flex flex-col w-full ${containerClass} 
    ${containerMobileGroupClass}`}
    >
      <div
        className={`relative w-full bg-[#262626] rounded-[10px] 
        ${imageGroupClass} ${imageMobileGroupClass}`}
      >
        <div
          className="text-2xl border-4 border-solid left-[0.625rem] px-[0.875rem]
        bottom-[0.875rem] rounded-lg border-white absolute font-bold text-white
        leading-[150%] truncate max-w-[13.88vh] py-[3px]"
        >
          {name}
        </div>
      </div>
      <h1
        className="text-[0.93125rem] leading-[150%] truncate
        tracking-[0.139688px] mt-[0.875rem] text-white"
      >
        {name}
      </h1>
      <span
        className="text-[0.6984375rem] text-[#B2B2B2] leading-[150%]
        tracking-[0.3725px]"
      >
        {count} Results
      </span>
    </div>
  );
};
export default TagItem;
