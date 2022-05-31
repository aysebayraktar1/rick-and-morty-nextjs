import React from "react";
import {
  CharacterCardWrapper,
  AvatarStyled,
  CharacterNameStyled,
  CharacterSpeciesStyled,
} from "./styled";
const CharacterCard = ({ name, id, image, species }) => {
  return (
    <CharacterCardWrapper data-testid="CharacterCard__Component">
      <a href={`/character/${id}`}>
        <AvatarStyled src={image} />
        <CharacterNameStyled>{name}</CharacterNameStyled>
        <CharacterSpeciesStyled>{species}</CharacterSpeciesStyled>
      </a>
    </CharacterCardWrapper>
  );
};

export default CharacterCard;
