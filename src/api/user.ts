import api from './base';

const subPath = 'users';

const useUserApi = () => {
  const followerApi = api(subPath);

  const GET_FOLLOWER = async (page: number, pageSize: number) => {
    const resp = await followerApi.get('all', {
      params: {
        page: page,
        pageSize: pageSize,
      },
    });

    return await resp.data;
  };
  const GET_SEARCH = async (
      page: number,
      pageSize: number,
      keyword: string,
  ) => {
    const resp = await followerApi.get('all', {
      params: {
        page: page,
        pageSize: pageSize,
        keyword: keyword,
      },
    });
    return await resp.data;
  };

  return {GET_FOLLOWER, GET_SEARCH};
};

export default useUserApi;
