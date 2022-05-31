import React, { Fragment } from "react";

import { GetServerSideProps, NextPage } from "next";
import { getCharacterDetail } from "../../services/rest";
import {
  CharacterDetailStyled,
  ImageStyled,
  CharacterTitleStyled,
  InformationStyled,
  InfoTitleStyled,
  InfoStyled,
  EpisodesStyled,
  CategoryDescription,
  CategoryTitle,
  EpisodeListItem,
  DividerStyled,
} from "../../styles/character";
import { splitAndParseIdFromUrl } from "../../utils/splitParseId";
import NextImage from "../../components/Image";

const CharacterDetail: NextPage<IDetail> = ({ detail }) => {
  const {
    name,
    image,
    gender,
    species,
    status,
    location: { name: locationName },
    episode,
  } = detail;

  const category = [
    {
      title: "Gender",
      desc: gender,
    },
    {
      title: "Status",
      desc: status,
    },
    {
      title: "Specie",
      desc: species,
    },
    {
      title: "Location",
      desc: locationName,
    },
  ];

  return (
    <CharacterDetailStyled>
      <ImageStyled>
        <NextImage
          src={image}
          priority={true}
          width={200}
          height={200}
          objectFit="cover"
          quality={100}
          alt={name}
        />
      </ImageStyled>
      <CharacterTitleStyled>{name}</CharacterTitleStyled>
      <InformationStyled>
        <InfoStyled>
          <InfoTitleStyled>General Info</InfoTitleStyled>
          {category?.map(({ title, desc }, idx) => (
            <Fragment key={idx}>
              <CategoryTitle>{title}</CategoryTitle>
              <CategoryDescription>{desc}</CategoryDescription>
              <DividerStyled />
            </Fragment>
          ))}
        </InfoStyled>
        <EpisodesStyled>
          <InfoTitleStyled>Episodes</InfoTitleStyled>
          {episode.map((item) => {
            const id = splitAndParseIdFromUrl(item);
            return (
              <a href={`/episode/${id}`} key={id}>
                <EpisodeListItem>Episode: {id}</EpisodeListItem>
              </a>
            );
          })}
        </EpisodesStyled>
      </InformationStyled>
    </CharacterDetailStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  let detail = [];

  try {
    detail = await getCharacterDetail(id);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      detail,
    },
  };
};

export default CharacterDetail;
