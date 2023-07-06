import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  console.log(userList);
  return (
    <>
      <StHeader>
        <span>2023년 도서 리뷰 사이트</span>
        <div>
          <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            로그인
          </button>
          &nbsp;
          <button
            onClick={() => {
              navigate("/join");
            }}
          >
            회원 가입
          </button>
        </div>
      </StHeader>
      <main>
        <div>
          <button
            onClick={() => {
              navigate("/Write");
            }}
          >
            글 쓰기
          </button>
        </div>
        <div>
          <h1>게시판</h1>
        </div>
      </main>
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
