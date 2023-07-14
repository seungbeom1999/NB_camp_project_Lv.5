import axios from "axios";
import React from "react";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import CoButton from "../CoButton";

function CoWrite({ userName }) {
  const navigate = useNavigate();

  const [title, setTitle] = useInput();
  const [contents, setContents] = useInput();

  const onSubMitHandler = async () => {
    const writeBox = {
      id: crypto.randomUUID(),
      title,
      contents,
      writeName: userName,
      search: false,
    };
    axios.post(process.env.REACT_APP_SERVER_WRITE, writeBox);
    navigate("/Main");
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
        <CoButton title="write" size="lg">
          글 작성
        </CoButton>
      </form>
    </>
  );
}

export default CoWrite;
