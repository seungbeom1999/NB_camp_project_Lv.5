import React from "react";
import CoWriteEntire from "./CoWriteEntire";
import CoWriteSearch from "./CoWriteSearch";
import axios from "axios";

function CoWrite({ login, user, write, filterWrite }) {
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

  return (
    <>
      <CoWriteEntire write={write} access={access} />
      <CoWriteSearch filterWrite={filterWrite} access={access} />
    </>
  );
}

export default CoWrite;
