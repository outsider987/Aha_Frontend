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
  return (
    <>
      <div className=" m-auto max-w-[58.75vw]">
        <div className="relative mb-[2.66vh]">
          <SvgICon
            onClick={onBack}
            name="arrow"
            className="absolute flex -left-8
            top-0 bottom-0 cursor-pointer
            items-center text-white"
          />
          <span className="text-3xl tracking-[0.25px] text-white">Tags</span>
        </div>
        <div className="grid grid-cols-5 gap-y-9">
          {stateTag.tagItem.map((item) => (
            <TagItem
              key={item.id}
              name={item.name}
              count={item.count}
            ></TagItem>
          ))}
        </div>
      </div>
    </>
  );
};
export default Search;
