import React from "react";
import { styled } from "styled-components";
import axios from "axios";
import CoLoginHeader from "./CoLoginHeader";
import CoMainHeader from "./CoMainHeader";

function CoHeader({ login, user, setLogin }) {
  const logoutSubmit = async () => {
    alert("로그아웃 되었습니다.");
    await axios.put(`http://localhost:4000/login/${user.id}`, {
      ...user,
      isLogin: false,
    });
    setLogin(false);
  };
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
