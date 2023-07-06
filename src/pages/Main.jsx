import React from "react";
import { styled } from "styled-components";

function Main() {
  return (
    <>
      <StHeader>
        <span>2023년 책 리뷰</span>
        <button> 로그인 </button>
      </StHeader>
    </>
  );
}

export default Main;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 12px;
  padding: 5px;
  margin: 5px;
`;
