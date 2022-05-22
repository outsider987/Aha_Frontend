import api from './base';

const subPath = 'tags';

const useTagsApi = () => {
  const followerApi = api(subPath);

  const GET_TAGS = async () => {
    const resp = await followerApi.get('', {});

    return await resp.data;
  };

  return {GET_TAGS};
};

export default useTagsApi;
