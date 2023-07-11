import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import useInput from "../hooks/useInput";
import serachImg from "../img/search.png";
import CoWrite from "../components/Main/Write/CoWrite";
import CoHeader from "../components/Main/Header/CoHeader";
import CoSearch from "../components/Main/Header/CoSearch";

function Main() {
  //axios 사용 방법
  const [write, setWrite] = useState(null);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();
  const [title, setTitle] = useInput();

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
    setWrite(updateList);
  };

  useEffect(() => {
    writeData();
    userData();
  }, []);

  return (
    <>
      <header>
        <CoHeader login={login} user={user} setLogin={setLogin} />
        <CoSearch login={login} user={user} />
      </header>
      <main>
        <StSearch>
          검색: &nbsp;
          <input type="text" value={title} onChange={setTitle} /> &nbsp;
          <StButtonContainer onClick={(e) => writeFilter(e)}>
            <StSearchimg src={serachImg} alt="돋보기" />
          </StButtonContainer>
        </StSearch>

        <CoWrite
          writeData={writeData}
          login={login}
          user={user}
          write={write}
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
  padding: 15px 0;
  margin: 0 auto;
`;

export const StButtonContainer = styled.button`
  width: 25px;
  height: 25px;
  padding: 0px;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

export const StSearchimg = styled.img`
  width: 100%;
  height: 100%;
`;
