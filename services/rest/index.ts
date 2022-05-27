import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});
export const getEpisodeList = async () => {
  const episodes = await api.get(
    `episode`
  );

  return episodes.data;
};

