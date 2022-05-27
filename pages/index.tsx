import { GetStaticProps } from "next";
import { getEpisodeList } from "../services/rest";

const Home = ({episodes}) => {
  const {results} = episodes || {}
  console.log(results)
  return (
    <div data-testId="main">
      Rick and Morty
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let episodes;
  try {
    episodes = await getEpisodeList();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      episodes,
    },
  };
};

export default Home
