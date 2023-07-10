import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import useInput from "../hooks/useInput";
import serachImg from "../img/search.png";

function Main() {
  const navigate = useNavigate();

  //axios 사용 방법
  const [write, setWrite] = useState(null);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();
  const [title, setTitle] = useInput();
  const [filterWrite, setFilterWrite] = useState([]);

  const writeData = async () => {
    const { data } = await axios.get("http://localhost:4000/write");
    setWrite(data);
  };

  const userData = async () => {
    const { data } = await axios.get("http://localhost:4000/login");
    const loginUser = data.find((userData) => userData.isLogin === true);
    if (loginUser) {
      setLogin(loginUser.isLogin);
      setUser(loginUser);
    }
  };

  const writeFilter = (e) => {
    e.preventDefault();
    const writefilteringList = write.filter((item) => item.title === title);
    const updateList = writefilteringList.map((item) => ({
      ...item,
      search: true,
    }));
    const filterList = write.map((item) => ({
      ...item,
      search: true,
    }));
    setWrite(filterList);
    setFilterWrite(updateList);
  };

  const logoutSubmit = async () => {
    alert("로그아웃 되었습니다.");
    await axios.put(`http://localhost:4000/login/${user.id}`, {
      ...user,
      isLogin: false,
    });
    setLogin(false);
  };

  const access = ({ id, writeName }) => {
    if (login) {
      return vardition(id, writeName);
    } else {
      return alert("로그인이 되어야 가능합니다.");
    }
  };

  const vardition = (id, writeName) => {
    console.log(writeName);
    if (user.userName === writeName) {
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
  }, []);

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
        <StSearch>
          검색: &nbsp;
          <input type="text" value={title} onChange={setTitle} /> &nbsp;
          <button onClick={(e) => writeFilter(e)}>
            <img src={serachImg} alt="돋보기" />
          </button>
        </StSearch>

        <StBtnList>
          {write
            ?.filter((board) => board.search === false)
            .map((board) => {
              return (
                <StWriteForm key={board.id}>
                  <StWrite>제목: {board.title}</StWrite>
                  <StWrite>review: {board.contents}</StWrite>
                  <div>
                    <button>댓글 작성</button> &nbsp;
                    <button
                      onClick={() => {
                        access({ writeName: board.writeName, id: board.id });
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </StWriteForm>
              );
            })}
        </StBtnList>

        <StBtnList>
          {filterWrite
            ?.filter((board) => board.search === true)
            .map((board) => {
              return (
                <StWriteForm key={board.id}>
                  <StWrite>제목: {board.title}</StWrite>
                  <StWrite>review: {board.contents}</StWrite>
                  <div>
                    <button>댓글 작성</button> &nbsp;
                    <button
                      onClick={() => {
                        access({ writeName: board.writeName, id: board.id });
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </StWriteForm>
              );
            })}
        </StBtnList>
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

const StSearch = styled.form`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

const StWriteForm = styled.form`
  padding: 5px;
  max-width: 250px;
  min-width: 180px;
  max-height: 130px;
  min-height: 125px;
  background-color: #bfd8ff;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;
const StWrite = styled.div`
  margin: 8px;
  font-size: 18px;
  font-weight: 700;
`;
const StBtnList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  margin: 5px;
`;
