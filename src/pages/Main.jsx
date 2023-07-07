import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { logout } from "../redux/modules/userList";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  console.log("userList", userList);
  const loginUser = userList.find((user) => user.isLogin === true);
  // console.log(loginUser);
  return (
    <>
      <StHeader>
        <span>2023년 도서 리뷰 사이트</span>
        <div>
          {loginUser ? (
            <>
              <button
                onClick={() => {
                  navigate("/Write");
                }}
              >
                글 쓰기
              </button>
              <button
                onClick={() => {
                  const confirmed = window.confirm("로그아웃 하시겠습니까?");
                  if (confirmed) {
                    dispatch(logout(loginUser.id));
                  }
                }}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/Login");
                }}
              >
                로그인
              </button>
              <button
                onClick={() => {
                  navigate("/join");
                }}
              >
                회원 가입
              </button>
            </>
          )}
        </div>
      </StHeader>
      {loginUser && (
        <StHeader>
          <span>{loginUser.userName}님 반갑습니다~</span>
          <button
            onClick={() => {
              navigate("/Write");
            }}
          >
            글 쓰기
          </button>
        </StHeader>
      )}
      <main>
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
