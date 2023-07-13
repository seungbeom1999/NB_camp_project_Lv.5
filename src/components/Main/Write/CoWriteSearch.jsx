import React, { useState } from "react";
import CoButton from "../../CoButton";
import { styled } from "styled-components";
import CoCommentform from "../../CoCommentform";
import axios from "axios";
import useInput from "../../../hooks/useInput";

function CoWriteEntire({ write, access, login, user }) {
  const [comment, setComment] = useState(null);
  const [newTitle, setNewTitle] = useInput("");
  const [newcontents, setNewContents] = useInput("");

  const openModal = async ({ id }) => {
    const { data } = await axios.get("http://localhost:4000/write");
    const write = data.find((user) => user.id === id);
    console.log(write);

    if (id === write.id) {
      setComment(id);
    } else {
      return setComment(null);
    }
  };
  const closeModal = () => {
    setComment(null);
  };

  const updateAccess = ({ id, writeName }) => {
    if (login) {
      return updatevardition({ id, writeName });
    } else {
      return alert("로그인이 되어야 가능합니다.");
    }
  };

  const updatevardition = ({ id, writeName }) => {
    if (user.userName === writeName) {
      return openModal({ id });
    } else {
      alert("작성한 글이 아닙니다.");
    }
  };

  const updateBtn = async (id, newTitle, newcontents) => {
    const { data } = await axios.get("http://localhost:4000/write");
    const user = data.find((user) => user.id === id);
    await axios.put(`http://localhost:4000/write/${user.id}`, {
      ...user,
      title: newTitle,
      contents: newcontents,
    });
    closeModal();
  };
  return (
    <>
      <StBtnList>
        {write
          ?.filter((board) => board.search === true)
          .map((board) => {
            return (
              <>
                <StWriteForm key={board.id}>
                  <StWrite>제목: {board.title}</StWrite>
                  <StWrite>review: {board.contents}</StWrite>
                  <StBtnDiv>
                    <CoButton
                      title="comment"
                      size="sm"
                      onClick={() =>
                        updateAccess({
                          id: board.id,
                          writeName: board.writeName,
                        })
                      }
                    >
                      수정
                    </CoButton>{" "}
                    &nbsp;
                    <CoButton
                      title="delete"
                      size="sm"
                      onClick={() => {
                        access({ writeName: board.writeName, id: board.id });
                      }}
                    >
                      삭제
                    </CoButton>
                  </StBtnDiv>
                </StWriteForm>
                {comment === board.id && (
                  <CoCommentform
                    closeModal={closeModal}
                    id={board.id}
                    title={board.title}
                    contents={board.contents}
                    updateBtn={updateBtn}
                  />
                )}
              </>
            );
          })}
      </StBtnList>
    </>
  );
}

export default CoWriteEntire;

export const StBtnDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2px;
`;

export const StBtnList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 5px;
  margin: 5px;
  gap: 20px;
`;

export const StWriteForm = styled.div`
  padding: 5px;
  max-width: 250px;
  min-width: 180px;
  max-height: 130px;
  min-height: 125px;
  background-color: #f2dfd3;
  border: 1px solid #d3a27f;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const StWrite = styled.div`
  margin: 5px;
  font-size: 14px;
  font-weight: 700;
`;
