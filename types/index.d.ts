interface IDetail {
  detail: {
    name?: string;
    characters?: Array;
    image?: string;
    gender?: string;
    species?: string;
    status?: string;
    location?: {
      name?: string
    }
    episode?: Array
  };
  characters?: Array;
}
