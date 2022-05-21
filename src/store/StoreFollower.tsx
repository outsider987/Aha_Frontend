import React, {useState} from 'react';
import useUserApi from '~/api/user';

export interface FollowerDatas {
  Items?: InterFollowerItem[];
  PageCount?: number;
  currentPage?: number;
  itemCounts?: number;
}
export interface InterFollowerItem {
  id: number;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}
const initialState: FollowerDatas = {
  Items: [
    {
      id: 0,
      name: 'string',
      username: 'string',
      avater: 'string',
      isFollowing: false,
    },
  ],
  PageCount: 1,
  currentPage: 1,
  itemCounts: 30,
};

const useStoreFollower = () => {
  const [stateFollower, setFollowerState] =
    useState<FollowerDatas>(initialState);

  //   useEffect(() => {
  //     getFollowerData(followerState.startTime, followerState.endTime);
  //   }, [followerState.currentPage]);

  const {GET_FOLLOWER} = useUserApi();

  const getFollowerData = (page: number, pageSize: number) => {
    GET_FOLLOWER(page, pageSize).then((res) => {
      const data = res.data as InterFollowerItem[];
      setFollowerState((prevProductState) => ({
        ...prevProductState,
        Items: data,
      }));
    });
  };
  //   const setCurrentPage = (currentPage: number) => {
  //     setFollowerState((prevProductState) => ({
  //       ...prevProductState,
  //       currentPage: currentPage,
  //     }));
  //   };
  //   const patchProductData = async (
  //       Id: number,
  //       received: number,
  //       scrap: number,
  //   ) => {
  //     await PATCH(Id, received, scrap);
  //     await getFollowerData(followerState.startTime, followerState.endTime);
  //   };

  return {
    stateFollower,
    getFollowerData,
  };
};

export {useStoreFollower};
