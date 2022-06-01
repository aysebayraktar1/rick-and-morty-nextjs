import React, { useEffect, useState } from "react";
import {
  DropdownContainer,
  DropdownStyled,
  DropdownButton,
  DropdownList,
  DropdownListItem,
} from "./styled";

const Dropdown = ({ optionsList, handleSelectedOption }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  useEffect(() => {
    handleSelectedOption(
      optionsList[selectedOption].key,
      optionsList[selectedOption].text
    );
  }, [optionsList, selectedOption]);

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption(
          selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <DropdownStyled>
      <DropdownContainer>
        <DropdownButton
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {optionsList[selectedOption].text}
        </DropdownButton>
        <DropdownList
          role="listbox"
          aria-activedescendant={optionsList[selectedOption].text}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
          isOptionsOpen={isOptionsOpen}
        >
          {optionsList?.map(({ id, text, key }) => (
            <DropdownListItem
              key={id}
              id={key}
              role="option"
              aria-selected={selectedOption == id}
              tabIndex={0}
              onKeyDown={handleKeyDown(id)}
              onClick={() => {
                setSelectedThenCloseDropdown(id);
              }}
            >
              {text}
            </DropdownListItem>
          ))}
        </DropdownList>
      </DropdownContainer>
    </DropdownStyled>
  );
};

export default Dropdown;
