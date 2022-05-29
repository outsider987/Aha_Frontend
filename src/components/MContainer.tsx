import React from 'react';
interface Props {
  children: React.ReactNode;
}

const MContainer: React.FC<Props> = ({children}) => {
  return (
    <div
      className="lg:hidden flex flex-col ml-5 mr-[0.4375rem] max-h-[100vh]
  relative "
    >
      {children}
    </div>
  );
};
export default MContainer;
