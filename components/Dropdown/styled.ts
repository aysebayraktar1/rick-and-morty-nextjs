import styled from "styled-components";

export const DropdownStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const DropdownContainer = styled.div`
  width: 100px;
  button {
    border: 0;
    border-radius: 4px;
    background: hotpink;
    width: 100%;
    padding: 6px 8px;
    position: relative;
    text-align: left;
    &:hover {
      cursor: pointer;
    }
    &:after {
      position: absolute;
      right: 6px;
      top: 4px;
    }
  }
`;

export const DropdownButton = styled.div`
  width: 100px;
  border: 0;
  border-radius: 4px;
  width: 100%;
  padding: 6px 8px;
  position: relative;
  text-align: center;
  background: #19acc9;
  color: white;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  display: ${(props) => (props.isOptionsOpen ? "block" : "none")};
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 0;
  color: white;
  position: absolute;
  width: 100px;
`;

export const DropdownListItem = styled.li`
  cursor: pointer;
  background: #98c8d2;
  color: white;
  padding: 10px 0;
  &:active,
  &:focus,
  &:hover {
    background: #19acc9;
    cursor: pointer;
  }
`;
