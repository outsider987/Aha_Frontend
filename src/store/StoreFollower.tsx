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

  const {GET_FOLLOWER, GET_FOLLOWING} = useUserApi();

  const getFollowerData = (page: number, pageSize: number) => {
    GET_FOLLOWER(page, pageSize).then((res) => {
      const data = res.data as InterFollowerItem[];
      setFollowerState((prevProductState) => ({
        ...prevProductState,
        Items: data,
      }));
    });
  };
  const getFollowingData = (page: number, pageSize: number) => {
    GET_FOLLOWING(page, pageSize).then((res) => {
      const data = res.data as InterFollowerItem[];
      setFollowerState((prevProductState) => ({
        ...prevProductState,
        Items: data,
      }));
    });
  };

  return {
    stateFollower,
    getFollowerData,
    getFollowingData,
  };
};

export {useStoreFollower};
