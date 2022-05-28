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
            focus:opacity-100 tracking-[0.25px] placeholder:opacity-30
          bg-greyscale border-[3px] border-solid leading-[150%]
          border-white border-opacity-50  
           rounded-md pt-5 pb-[19px] px-[0.9375rem]
           text-white
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
