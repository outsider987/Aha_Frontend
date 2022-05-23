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
  //
  useEffect(() => {
    tagsAction.getTags();
  }, []);
  return (
    <>
      <div className=" flex flex-col w-full">
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
    </>
  );
};
export default Search;
