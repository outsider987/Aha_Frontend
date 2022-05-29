import React from 'react';

interface Props {
  id?: number;
  name: string;
  count: number;
}

const TagItem: React.FC<Props> = ({name, count}) => {
  const containerClass = `max-w-[9.375rem] max-h-[12.4375rem] 
  min-h-[9.375rem] min-w-[9.375rem]`;
  const imageGroupClass = `max-w-[9.375rem] max-h-[9.375rem] 
    min-h-[9.375rem] min-w-[9.375rem]`;

  return (
    <div
      className={`flex flex-col w-full ${containerClass} `}
    >
      <div
        className={`relative w-full bg-[#262626] rounded-[10px] 
        ${imageGroupClass}`}
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
        tracking-[0.139688px] mt-[0.625rem] text-white"
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
