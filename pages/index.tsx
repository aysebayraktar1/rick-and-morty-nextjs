import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { getEpisodeList } from "../services/rest";
import {
  HomeStyled,
  EpisodeCardWrapper,
  EpisodeNameStyled,
  EpisodeNumberStyled,
} from "../styles/home";

const Home = ({ episodeList }) => {

  const { results = [], info } = episodeList || {};
  const { pages } = info;

  const [currentPage, setCurrentPage] = useState(1);
  const [episodes, setEpisodes] = useState(results);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // paginate episode list
    const changePage = async () => {
      try {
        const episodes = await getEpisodeList(currentPage);
        setEpisodes(episodes.results);
      } catch (err) {
        console.log(err);
      }
    };
    pages >= currentPage && changePage();
  }, [pages, currentPage]);

  return (
    <HomeStyled data-testid="main">
      {episodes?.map(({ id, name, episode }) => (
        <EpisodeCardWrapper key={id}>
          <a href={`episode/${id}`}>
            <EpisodeNameStyled>{name}</EpisodeNameStyled>
            <EpisodeNumberStyled>{episode}</EpisodeNumberStyled>
          </a>
        </EpisodeCardWrapper>
      ))}
      <Pagination totalItem={info?.count} paginate={paginate} />
    </HomeStyled>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let episodes;
  try {
    episodes = await getEpisodeList(1);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      episodeList: episodes,
    },
  };
};

export default Home;
