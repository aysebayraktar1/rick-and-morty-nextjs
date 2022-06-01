import React, { useEffect, useState } from "react";

import { GetServerSideProps, NextPage } from "next";
import { getCharacterDetail, getEpisodeDetail } from "../../services/rest";
import { splitAndParseIdFromUrl } from "../../utils/splitParseId";
import {
  DetailStyled,
  CharacterListStyled,
  DetailTitleStyled,
  CharacterTitle,
  FilterBarStyled,
} from "../../styles/episode";
import CharacterCard from "../../components/CharacterCard";
import {
  filterGender,
  filterStatus,
  filterSpecies,
} from "../../components/filter";
import Dropdown from "../../components/Dropdown";
const DetailPage: NextPage<IDetail> = ({ detail, characterList }) => {
  const [filter, setFilter] = useState({
    gender: "Male",
    status: "Dead",
    species: "Humanoid",
  });
  const [characters, setCharacters] = useState(characterList);

  const handleSelectedOption = (key, text) => {
    setFilter({ ...filter, [key]: text });
  };

  useEffect(() => {
    const { gender, status, species } = filter;
    const newCharList = characterList.filter(
      (item) =>
        item.gender == gender &&
        item.status == status &&
        item.species == species
    );
    newCharList.length > 0 && setCharacters(newCharList);
  }, [filter]);

  return (
    <DetailStyled>
      <FilterBarStyled>
        <Dropdown
          optionsList={filterGender}
          handleSelectedOption={handleSelectedOption}
        />
        <Dropdown
          optionsList={filterStatus}
          handleSelectedOption={handleSelectedOption}
        />
        <Dropdown
          optionsList={filterSpecies}
          handleSelectedOption={handleSelectedOption}
        />
      </FilterBarStyled>
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
    </DetailStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  let detail,
    charArr = [],
    characters;

  // fetch comics
  try {
    detail = await getEpisodeDetail(id);
  } catch (err) {
    console.log(err);
  }
  detail?.characters?.map((item) => {
    charArr.push(splitAndParseIdFromUrl(item));
  });

  try {
    characters = await getCharacterDetail(charArr, "male", "live", "Humanoid");
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      detail,
      characterList: characters,
      charArr,
    },
  };
};

export default DetailPage;
