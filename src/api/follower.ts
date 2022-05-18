import api from './base';

const subPath = 'users';

const useFollowerApi = () => {
  const followerApi = api(subPath);

  const GET = async (page: number, pageSize: number) => {
    const resp = await followerApi.get('all', {
      params: {
        page: page,
        pageSize: pageSize,
      },
    });

    return await resp.data;
  };

  return {GET};
};

export default useFollowerApi;
