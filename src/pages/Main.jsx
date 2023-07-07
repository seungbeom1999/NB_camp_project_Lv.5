import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { logout } from "../redux/modules/userList";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardList = useSelector((state) => state.boarderList);
  const userList = useSelector((state) => state.userList);
  console.log("userList", userList);
  console.log("boardList", boardList);
  const loginUser = userList.find((user) => user.isLogin === true);
  // console.log(loginUser);
  const access = () => {
    if (loginUser) {
      return alert("조금만 기다려주세요~~");
    } else {
      return alert("로그인이 되어야 가능합니다.");
    }
  };
  return (
    <>
      <StHeader>
        <span>2023년 도서 리뷰 사이트</span>
        <div>
          {loginUser ? (
            <>
              <button
                onClick={() => {
                  navigate("/Write", { state: { loginUserId: loginUser.id } });
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
        </StHeader>
      )}
      <main>
        <div>
          <h1>게시판</h1>
        </div>
        <div>
          {boardList
            .filter((board) => board.isDeleted === false)
            .map((board) => {
              return (
                <Stdiv key={board.id} onClick={access}>
                  <h3>제목: {board.title}</h3>
                  <h4>review: {board.contents}</h4>
                  <button>댓글 작성</button>
                </Stdiv>
              );
            })}
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

const Stdiv = styled.button`
  padding: 5px;
  margin: 5px;
  max-width: 250px;
  max-height: 130px;
  background-color: #bfd8ff;
  border: 1px solid black;
  border-radius: 12px;
`;
