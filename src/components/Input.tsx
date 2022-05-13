import React from 'react';

interface Props {
  placeholder?: string;
  value: any;
  label?: string;
  className?: string;
  inputClassName?: string;
  type: string;
  setInput: (value: any) => void;
  autoFocus?: boolean;
}
const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={`flex flex-col ` + props.className}>
      {props.label != undefined && <span className="flex">{props.label}</span>}
      <input
        className={`w-auto focus:outline-none focus:border-inputFcous 
            focus:opacity-100
          bg-greyscale border-[3px] border-solid 
          border-white border-opacity-50  
           rounded-md  py-5 px-[1.125rem]
           opacity-30 text-white
            text-sm
          ${props.inputClassName}`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        autoFocus={props.autoFocus}
        onChange={(e) => {
          let result = undefined;
          switch (e.target.type) {
            case 'number':
              result = Number(e.target.value);
              break;

            default:
              result = e.target.value;
              break;
          }
          props.setInput(result);
        }}
      />
    </div>
  );
};
Input.defaultProps = {autoFocus: false};

export default Input;
