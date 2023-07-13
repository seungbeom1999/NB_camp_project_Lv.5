import React from "react";
import { styled } from "styled-components";
import axios from "axios";
import CoLoginHeader from "./CoLoginHeader";
import CoMainHeader from "./CoMainHeader";

function CoHeader({ login, user, setLogin }) {
  const logoutSubmit = async () => {
    alert("로그아웃 되었습니다.");
    await axios.put(`${process.env.REACT_APP_SERVER_LOGIN}/${user.id}`, {
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
  align-items: center;
  padding: 5px;
  margin: 5px;
  border: 1px solid white;
  border-radius: 12px;
  background-color: #f5f5dc;
`;
