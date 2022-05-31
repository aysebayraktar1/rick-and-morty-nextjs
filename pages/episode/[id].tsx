import React from "react";

import { GetServerSideProps, NextPage } from "next";
import { getCharacterDetail, getEpisodeDetail } from "../../services/rest";
import { splitAndParseIdFromUrl } from "../../utils/splitParseId";
import {
  DetailStyled,
  CharacterListStyled,
  DetailTitleStyled,
  CharacterTitle,
} from "../../styles/episode";
import CharacterCard from "../../components/CharacterCard";
import {filter} from '../../components/filter'
import CustomSelect from "../../components/Dropdown";
const DetailPage: NextPage<IDetail> = ({ detail, characters }) => {
  
  console.log(filter)
  return (
    <DetailStyled>
      <DetailTitleStyled>Episode: {detail.name}</DetailTitleStyled>
      <CharacterTitle>Characters</CharacterTitle>
      <CharacterListStyled>
        {characters?.map(({ id, name, image, species }) => (
          <CharacterCard
            key={id}
            name={name}
            image={image}
            id={id}
            species={species}
          />
        ))}
      </CharacterListStyled>
      <CustomSelect/>
    </DetailStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  let detail, newArry = [], characters
  
  // fetch comics
  try {
    detail = await getEpisodeDetail(id);
  } catch (err) {
    console.log(err);
  }
  detail?.characters?.map((item) => {
    newArry.push(splitAndParseIdFromUrl(item));
  });

  try {
    characters = await getCharacterDetail(newArry);
    console.log(characters);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      detail,
      characters,
    },
  };
};

export default DetailPage;
