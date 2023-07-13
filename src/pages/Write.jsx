import React, { useEffect, useState } from "react";
import axios from "axios";
import CoWrite from "../components/Write/CoWrite";

function Write() {
  const [userName, setUserName] = useState();

  const userData = async () => {
    const { data } = await axios.get(process.env.REACT_APP_SERVER_LOGIN);
    const loginUser = data.find((user) => user.isLogin === true);
    setUserName(loginUser.userName);
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <CoWrite userName={userName} />
    </>
  );
}

export default Write;
