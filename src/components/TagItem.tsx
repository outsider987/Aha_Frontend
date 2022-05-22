import React from 'react';

interface Props {
  id?: number;
  name: string;
  count: number;
}

const TagItem: React.FC<Props> = ({name, count}) => {
  return (
    <div className="flex flex-col w-full min-h-[16.66vh]">
      <div
        className="relative max-w-[16.66vh] max-h-[16.66vh]
       min-h-[16.66vh] w-full bg-[#262626] rounded-[10px]"
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
        className="text-[0.93125rem] leading-[150%]
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
