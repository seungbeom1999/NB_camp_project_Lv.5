import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import useInput from "../hooks/useInput";
import serachImg from "../img/search.png";
import CoHeader, { StHeader } from "../components/Main/CoHeader";
import CoWrite from "../components/Main/Write/CoWrite";

function Main() {
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

  useEffect(() => {
    writeData();
    userData();
  }, []);

  return (
    <>
      <CoHeader login={login} user={user} setLogin={setLogin} />
      {login && user && (
        <StHeader>
          <span>{user.userName}님 반갑습니다~</span>
        </StHeader>
      )}
      <main>
        <StSearch>
          검색: &nbsp;
          <input type="text" value={title} onChange={setTitle} /> &nbsp;
          <button onClick={(e) => writeFilter(e)}>
            <img src={serachImg} alt="돋보기" />
          </button>
        </StSearch>

        <div>
          <h1>게시판</h1>
        </div>

        <CoWrite
          login={login}
          user={user}
          write={write}
          filterWrite={filterWrite}
        />
      </main>
    </>
  );
}

export default Main;

const StSearch = styled.form`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const StWriteForm = styled.form`
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
export const StWrite = styled.div`
  margin: 8px;
  font-size: 18px;
  font-weight: 700;
`;
export const StBtnList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 5px;
  margin: 5px;
`;
