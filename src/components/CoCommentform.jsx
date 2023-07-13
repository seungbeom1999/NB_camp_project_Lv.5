import axios from "axios";
import React from "react";
import { styled } from "styled-components";
import useInput from "../hooks/useInput";

function CoCommentform({ closeModal, id, title, contents, updateBtn }) {
  const [newTitle, setNewTitle] = useInput(title);
  const [newcontents, setNewContents] = useInput(contents);

  //리스트 수정
  const handleSubmit = (e) => {
    e.preventDefault();
    updateBtn(id, newTitle, newcontents);
    closeModal();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <StModalBox>
          <StModalContents>
            <StTextarea
              customfontsize={"18px"}
              placeholder="제목은 생략이 가능해요"
              value={newTitle}
              onChange={setNewTitle}
            ></StTextarea>
            <StTextarea
              customfontsize={"14px"}
              customheight={"80%"}
              placeholder="어떤 이야기를 나누고 싶나요?"
              value={newcontents}
              onChange={setNewContents}
            ></StTextarea>
            <StBox>
              <StBtn type="submit" onClick={handleSubmit}>
                수정 완료
              </StBtn>
              <StBtn type="button" onClick={closeModal}>
                취소
              </StBtn>
            </StBox>
          </StModalContents>
        </StModalBox>
      </form>
    </>
  );
}

export default CoCommentform;

export const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const StModalContents = styled.div`
  background-color: #fff;
  width: 518px;
  height: 346px;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StTextarea = styled.textarea`
  font-size: ${(props) => props.customfontsize};
  width: 95%;
  padding: 10px;
  border: solid 0px;
  outline: none;
  font-family: "inter", sans-serif;
  font-weight: bolder;
  height: ${(props) => props.customheight};
`;

export const StBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const StBtn = styled.button`
  background-color: #6d55ff;
  color: #ffffff;
  border-radius: 20px;
  border: 1px solid #ffffff;
  width: 70px;
  height: 33px;
  font-size: 12px;
  margin-right: 15px;
  position: ${(props) => props.custompostion};
  right: ${(props) => props.customright};
  &:hover {
    height: 30px;
    color: #6d55ff;
    background-color: #ffffff;
    border: 1px solid #6d55ff;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
  }
`;
