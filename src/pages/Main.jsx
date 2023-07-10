import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

function Main() {
  const navigate = useNavigate();

  //axios 사용 방법
  const [write, setWrite] = useState(null);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();

  const writeData = async () => {
    const { data } = await axios.get("http://localhost:4000/write");
    setWrite(data);
  };

  const userData = async () => {
    const { data } = await axios.get("http://localhost:4000/login");
    const loginUser = data.find((user) => user.isLogin === true);
    if (loginUser) {
      setLogin(loginUser.isLogin);
      setUser(loginUser);
    }
  };

  const logoutSubmit = async () => {
    alert("로그아웃 되었습니다.");
    await axios.put(
      `http://localhost:4000/login/${user.id}`,
      {
        ...user,
        isLogin: false,
      },
      setLogin(false)
    );
  };

  const access = (id, writeName) => {
    if (login) {
      return vardition(id, writeName);
    } else {
      return alert("로그인이 되어야 가능합니다.");
    }
  };

  const vardition = (writeName, id) => {
    console.log(writeName);
    if (user.userName == writeName) {
      return deleteBtn(id);
    } else {
      return alert("작성한 글이 아닙니다.");
    }
  };

  const deleteBtn = async (id) => {
    const deleteCheck = window.confirm("삭제하시겟습니까?");
    if (deleteCheck) {
      await axios.delete(`http://localhost:4000/write/${id}`);
      alert("삭제되었습니다.");
    }
  };

  useEffect(() => {
    writeData();
    userData();
  }, [userData]);

  return (
    <>
      <StHeader>
        <span>2023년 도서 리뷰 사이트</span>
        <div>
          {login ? (
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
                    return logoutSubmit();
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
      {login && user && (
        <StHeader>
          <span>{user.userName}님 반갑습니다~</span>
        </StHeader>
      )}
      <main>
        <div>
          <h1>게시판</h1>
        </div>
        <div>
          {write
            ?.filter((board) => board.isDelete === false)
            .map((board) => {
              return (
                <StBtn key={board.id}>
                  <h3>제목: {board.title}</h3>
                  <h4>review: {board.contents}</h4>
                  <button type="button">댓글 작성</button> &nbsp;
                  <button
                    type="button"
                    onClick={() => {
                      access(board.writeName, board.id);
                    }}
                  >
                    삭제
                  </button>
                </StBtn>
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

const StBtn = styled.button`
  padding: 5px;
  margin: 5px;
  max-width: 250px;
  min-width: 180px;
  max-height: 130px;
  min-height: 125px;
  background-color: #bfd8ff;
  border: 1px solid black;
  border-radius: 12px;
`;
