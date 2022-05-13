import React, {useState} from 'react';
import Input from '~/components/Input';

const Main = () => {
  const [searchValue, setSearchInput] = useState('');
  return (
    <>
      {/* desktop */}
      <div className='flex flex-col'>
        <span className=" flex text-white text-2xl mb-[2.2vh]">Search</span>
        <Input
          type="text"
          value={searchValue}
          setInput={setSearchInput}
          placeholder={'Keyword'}
        />
        <div className='w-full h-[1px] bg-white bg-opacity-10 mt-[3.3vh]'/>
      </div>
    </>
  );
};
export default Main;
