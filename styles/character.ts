import styled from "styled-components";

export const ImageStyled = styled.div`
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const CharacterDetailStyled = styled.div`
  display: flex;
  max-width: 1179px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  flex-direction: column;
`;

export const CharacterTitleStyled = styled.h1`
  margin-top: 30px;
  font-size: 26px;
  font-weight: 400;
`;

export const InformationStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const InfoTitleStyled = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const InfoStyled = styled.div`
  width: 50%;
`;

export const EpisodesStyled = styled.div`
  display: grid;
`;

export const CategoryTitle = styled.div`
  font-weight: 600;
`;

export const CategoryDescription = styled.div``;

export const EpisodeListItem = styled.div`
  padding: 10px 0;
`;

export const DividerStyled = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #cfcfcf;
  margin: 10px 0px;
`;
