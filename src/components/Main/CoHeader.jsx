import React from "react";
import CoMainHeader from "./CoMainHeader";
import CoLoginHeader from "./CoLoginHeader";
import { styled } from "styled-components";

function CoHeader({ login, logoutSubmit }) {
  return (
    <StHeader>
      <span>2023년 도서 리뷰 사이트</span>
      {login ? <CoLoginHeader logoutSubmit={logoutSubmit} /> : <CoMainHeader />}
    </StHeader>
  );
}

export default CoHeader;

export const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 12px;
  padding: 5px;
  margin: 5px;
`;
