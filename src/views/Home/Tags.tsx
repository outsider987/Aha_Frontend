import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import SvgICon from '~/components/SvgIcon';
import TagItem from '~/components/TagItem';
import {useContextTags} from '~/store/context/TagContext';

const Search = () => {
  const {state: stateTag, actions: tagsAction} = useContextTags();

  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    tagsAction.getTags();
  }, []);
  const renderDesktop = () => {
    return (
      <div className="hidden lg:flex flex-col w-full">
        <div className="mr-[21px] mb-6">
          <div className="relative m-auto max-w-[58.75vw] w-full">
            <SvgICon
              onClick={onBack}
              name="arrow"
              className="absolute flex -left-8
            top-0 bottom-0 cursor-pointer
            items-center text-white"
            />
            <span className="text-3xl tracking-[0.25px] text-white">Tags</span>
          </div>
        </div>

        <div className=" max-h-[83.44vh] overflow-auto mr-[21px]">
          <div className="grid grid-cols-5 gap-y-9 max-w-[58.75vw] m-auto items-start min ">
            {stateTag.tagItem.map((item) => (
              <TagItem
                key={item.id}
                name={item.name}
                count={item.count}
              ></TagItem>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div
        className="lg:hidden flex flex-col ml-[5.33vw] mr-[1.86vw]
      relative "
      >
        <div
          className=" text-3xl text-white flex flex-row space-x-[2.44vh]
         leading-[150%] tracking-[0.25px]  py-[2.09vh] relative"
        >
          <SvgICon
            onClick={onBack}
            name="arrow"
            className="flex cursor-pointer
            items-center text-white"
          />
          <span>Home page</span>
        </div>
        <div
          className="flex flex-col justify-between
         overflow-auto max-h-[81.77vh] "
        >
          <span className=" text-2xl text-white leading-[150%] mb-6">
            Results
          </span>
          <div className="mr-[2.13vw] grid grid-cols-2 gap-y-6">
            {stateTag.tagItem.map((item) => (
              <TagItem key={item.id} name={item.name} count={item.count} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {renderDesktop()}
      {renderMobile()}
    </>
  );
};
export default Search;
