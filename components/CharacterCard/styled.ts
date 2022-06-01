import styled from "styled-components";

export const CharacterCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 25%;
  height: auto;
  margin: 16px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  &:hover {
    box-shadow: rgb(0 0 0 / 12%) 0px 5px 22px 4px;
  }
  @media (max-width: 768px) {
    width: 35%;
  }
  @media (max-width: 425px) {
    width: 70%;
  }
`;

export const AvatarStyled = styled.img`
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CharacterNameStyled = styled.h3`
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

export const CharacterSpeciesStyled = styled(CharacterNameStyled)`
  font-size: 16px;
  color: #19acc9;
  line-height: 0;
  padding-bottom: 8px;
`;
