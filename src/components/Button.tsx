import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({children, className, onClick}) => {
  return (
    <button
      className={`block w-full text font-bold bg-white 
    rounded py-[0.8125rem] px-[0.625rem]
     text-[#121212] leading-[100%] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
