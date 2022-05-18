import React, {useState} from 'react';
import useFollowerApi from '~/api/follower';

export interface FollowerDatas {
  Items?: FollowerItem[];
  PageCount?: number;
  currentPage?: number;
  itemCounts?: number;
}
export interface FollowerItem {
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
  const [followerState, setFollowerState] =
    useState<FollowerDatas>(initialState);

  //   useEffect(() => {
  //     getFollowerData(followerState.startTime, followerState.endTime);
  //   }, [followerState.currentPage]);

  const {GET} = useFollowerApi();

  const getFollowerData = (page: number, pageSize: number) => {
    GET(page, pageSize).then((res) => {
      console.log(res);
      const data = res.data as FollowerDatas;
      setFollowerState((prevProductState) => ({
        ...prevProductState,
        Items: data.Items,
        PageCount: data.PageCount,
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
    followerState: followerState,
    getFollowerData,
  };
};

export {useStoreFollower};
