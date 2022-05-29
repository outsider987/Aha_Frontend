import React from 'react';
import {useNavigate} from 'react-router-dom';
import SvgICon from './SvgIcon';

interface Props {
  children: React.ReactNode;
}

const MBackPage: React.FC<Props> = ({children}) => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        className="text-white flex flex-row space-x-[1.2425rem]
        ml-[0.34375rem]    py-[1.0625rem]
        relative"
      >
        <SvgICon
          onClick={onBack}
          name="arrow"
          className="flex cursor-pointer
      items-center text-white"
        />
        <span className="leading-[150%] text-2xl">Home page</span>
      </div>
      <span
        className=" text-2xl text-white leading-[150%] mb-6 mt-5
       min-h-[2.25rem]"
      >
        {children}
      </span>
    </>
  );
};
export default MBackPage;
