import React from "react";
import CoWriteEntire from "./CoWriteEntire";
import CoWriteSearch from "./CoWriteSearch";
import axios from "axios";
import { styled } from "styled-components";

function CoWrite({ login, user, write, writeData }) {
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

  const handlerRefresh = () => {
    writeData();
  };

  return (
    <>
      <StNotice onClick={handlerRefresh}>게시판</StNotice>
      <CoWriteEntire write={write} access={access} />
      <CoWriteSearch write={write} access={access} />
    </>
  );
}

export default CoWrite;

export const StNotice = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  width: 200px;
  height: 50px;
  border: 1px solid #d3a27f;
  background-color: #f5f5dc;
  border-radius: 12px;
  margin: 0 auto;
`;
