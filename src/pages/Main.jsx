import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import useInput from "../hooks/useInput";
import CoWrite from "../components/Main/Write/CoWrite";
import CoHeader from "../components/Main/Header/CoHeader";
import CoSearch from "../components/CoSearch";
import CoNickName from "../components/Main/Header/CoNickName";
import backgroundImg from "../img/backgroundImg.jpg";

const GlobalStyle = createGlobalStyle`
body {
background-image: url(${backgroundImg});
}
`;

function Main() {
  const [write, setWrite] = useState(null);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();
  const [title, setTitle] = useInput();

  useEffect(() => {
    writeData();
    userData();
  }, []);

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

  return (
    <>
      <header>
        <CoHeader login={login} user={user} setLogin={setLogin} />
        <CoNickName login={login} user={user} />
      </header>
      <GlobalStyle />
      <CoSearch
        title={title}
        setTitle={setTitle}
        write={write}
        setWrite={setWrite}
      />
      <CoWrite login={login} user={user} write={write} writeData={writeData} />
    </>
  );
}

export default Main;
