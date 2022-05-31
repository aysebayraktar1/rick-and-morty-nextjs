import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  max-width: 1179px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const EpisodeCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 20%;
  height: 128px;
  margin: 16px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  &:hover {
    box-shadow: rgb(0 0 0 / 12%) 0px 5px 22px 4px;
  }
`;

export const EpisodeNameStyled = styled.h2`
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.15px;
  font-size: 16px;
`;

export const EpisodeNumberStyled = styled.h3`
  font-style: normal;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 0px;
  color: #19acc9;
`;