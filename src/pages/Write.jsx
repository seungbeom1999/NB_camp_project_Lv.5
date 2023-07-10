import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";

function Write() {
  const navigate = useNavigate();

  const [title, setTitle] = useInput();
  const [contents, setContents] = useInput();
  const [userName, setUserName] = useState();

  const userData = async () => {
    const { data } = await axios.get("http://localhost:4000/login");
    const loginUser = data.find((user) => user.isLogin === true);
    setUserName(loginUser.userName);
  };

  useEffect(() => {
    userData();
  }, []);

  const writeBox = {
    id: crypto.randomUUID(),
    title,
    contents,
    writeName: userName,
    search: false,
  };

  const onSubMitHandler = async () => {
    axios.post("http://localhost:4000/write", writeBox);
    navigate("/");
  };

  return (
    <>
      <h1>글 작성 페이지</h1>
      <form onSubmit={onSubMitHandler}>
        <div>
          책 제목:{" "}
          <input
            type="text"
            value={title}
            onChange={setTitle}
            placeholder="글 제목을 입력해주세요"
          />{" "}
          <br />
          리뷰:{" "}
          <input
            type="text"
            value={contents}
            onChange={setContents}
            placeholder="글 제목을 입력해주세요"
          />
        </div>
        <button>글 작성</button>
      </form>
    </>
  );
}

export default Write;
