import styled from "styled-components";
import Link from "next/link";

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  padding-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    max-width: 520px;
  }
`;

export const NavbarStyled = styled.div`
  background: #ffffff;
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
`;

export const NavBarItem = styled(Link)`
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.15px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    color: #19acc9;
  }
`;
