import axios from "axios";

export const signal = axios.CancelToken.source();

const url = "https://api.jikan.moe/v3/top/anime/1/upcoming";

export const getData = async () => {
  const result = await axios
    .get(url, { cancelToken: signal.token })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Error getting data: ${response.statusText}`);
      }
      return { items: response.data.top, error: null };
    })
    .catch(err => {
      return { items: [], error: err.message };
    });
  return result;
};
