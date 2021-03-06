interface IDetail {
  detail: {
    name?: string;
    characters?: Array;
    image?: string;
    gender?: string;
    species?: string;
    status?: string;
    location?: {
      name?: string;
    };
    episode?: Array;
  };
  characterList?: Array;
  charArr?: string | string[];
}

interface IHome {
  episodeList?: {
    results?: Array;
    info?: {
      pages?: number;
      count?: number;
    };
  };
}
