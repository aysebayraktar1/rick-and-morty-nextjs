import React, { useState } from "react";
import { PaginationBoxStyled, PaginationWrapper } from "./styled";

const Pagination = ({ totalItem, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / 20); i++) {
    pageNumbers.push(i);
  }

  const [number, setNumber] = useState(1);
  const lastElement = pageNumbers[pageNumbers.length - 1];

  return (
    <PaginationWrapper>
      <PaginationBoxStyled
        onClick={() => {
          number !== 1 && setNumber(number - 1);
          paginate(number);
        }}
      >
        <div>Prev</div>
      </PaginationBoxStyled>
      {pageNumbers?.map((number, idx) => (
        <PaginationBoxStyled
          key={idx}
          onClick={() => {
            paginate(number);
            setNumber(number);
          }}
        >
          <div>{number}</div>
        </PaginationBoxStyled>
      ))}
      <PaginationBoxStyled
        onClick={() => {
          number !== lastElement && setNumber(number + 1);
          paginate(number);
        }}
      >
        <div>Next</div>
      </PaginationBoxStyled>
    </PaginationWrapper>
  );
};
export default Pagination;
