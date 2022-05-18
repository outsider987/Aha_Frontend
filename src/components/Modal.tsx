import React from 'react';
interface props {
  toggle: boolean;
  children: React.ReactNode;
}
const Modal: React.FC<props> = ({toggle, children}) => {
  if (toggle) {
    return (
      <div
        className={`absolute inset-0  ${
          toggle ? 'modal-mount ' : 'modal-unmount '
        }
        bottom-0
        top-0
        z-50
        flex
        h-full
        overflow-hidden
        bg-gray-800
        bg-opacity-50 transition-all delay-150 ease-in-out`}
      >
        {children}
      </div>
    );
  } else {
    return <></>;
  }
};
export default Modal;
