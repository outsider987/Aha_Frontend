import React, {useState} from 'react';
import Input from '~/components/Input';

const Main = () => {
  const [searchValue, setSearchInput] = useState('');
  return (
    <>
      {/* desktop */}
      <div>
        <span className=" flex text-white text-2xl mb-[2.2vh]">Search</span>
        <Input
          type="text"
          value={searchValue}
          setInput={setSearchInput}
          placeholder={'Keyword'}
          className="max-w-[50.34vw]"
        />
      </div>
    </>
  );
};
export default Main;
