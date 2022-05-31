import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});
export const getEpisodeList = async (page?: number) => {
  const result = await api.get(`episode/?page=${page}`);

  return result.data;
};

export const getEpisodeDetail = async (id: string | string[]) => {
  const result = await api.get(`episode/${id}`);

  return result.data;
};

export const getCharacterDetail = async (
  id: string | string[],
  gender?: string,
  status?: string,
  species?: string
) => {
  const result = await api.get(
    `character/${id}/?gender=${gender}&status=${status}&species=${species}`
  );

  return result.data;
};
