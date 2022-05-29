import React from 'react';
interface Props {
  children: React.ReactNode;
  contentClassName?: string;
}

const MWrapper: React.FC<Props> = ({children, contentClassName}) => {
  return (
    <div
      className="flex flex-col justify-between
   overflow-auto max-h-[81.77vh] "
    >
      <div
        className={`${contentClassName}
      mr-[0.875rem] `}
      >
        {children}
      </div>
    </div>
  );
};
export default MWrapper;
