import React, {forwardRef} from 'react';
import SvgICon from './SvgIcon';

interface Props {
  isload: boolean;
  children?: React.ReactNode;
  isEnd?: boolean;
}
const Loader = forwardRef<HTMLDivElement, Props>((props, ref) => {
  if (props.isload) {
    return (
      <div
        ref={ref}
        className="inset-0 m-auto w-1/12 rounded-full
       bg-transparent  bg-opacity-75 transition-opacity"
      >
        <SvgICon name="spin">{props.children}</SvgICon>
      </div>
    );
  } else if (props.isEnd) {
    return <div className=' text-white'> End</div>;
  } else {
    return <div className=' text-white' ref={ref}> loading</div>;
  }
});
export default Loader;
