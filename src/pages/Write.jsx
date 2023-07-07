import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../redux/modules/boarderList";
import useInput from "../hooks/useInput";

function Write() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useInput();
  const [contents, setContents] = useInput();

  // const userList = useSelector((state) => state.userList);
  // const loginUser = userList.find((user) => user.isLogin === true);
  // const userName = loginUser.userName;

  const handleWriteBtn = () => {
    dispatch(
      addPost({
        title,
        contents,
      })
    );
    navigate("/");
  };
  return (
    <>
      <h1>글 작성 페이지</h1>
      <form onSubmit={handleWriteBtn}>
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
