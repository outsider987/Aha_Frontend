import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MBackPage from '~/components/MBackPage';
import MContainer from '~/components/MContainer';
import MWrapper from '~/components/MWrapper';
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
      <div className="hidden lg:flex flex-col w-full max-h-[90.44vh]">
        <div className="mx-[1.3125rem] ">
          <div className="relative m-auto max-w-[58.75vw] w-full">
            <SvgICon
              onClick={onBack}
              name="arrow"
              className="absolute flex -left-8
            top-0 bottom-0 cursor-pointer
            items-center text-white"
            />
            <span className="flex h-full text-3xl tracking-[0.25px] leading-[150%]
             text-white">
                 Tags
                 </span>
          </div>
        </div>

        <div className=" max-h-[83.44vh] overflow-auto mx-[21px] mt-6">
          <div
            className="grid grid-cols-5 gap-y-9 gap-x-6 max-w-[846px]
           m-auto items-start min "
          >
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
      <MContainer>
        <MBackPage>Tags</MBackPage>
        <MWrapper contentClassName="grid grid-cols-2 gap-y-6 gap-x-6 
        ml-[0.3125rem] ">
          {stateTag.tagItem.map((item) => (
            <TagItem key={item.id} name={item.name} count={item.count} />
          ))}
        </MWrapper>
      </MContainer>
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
