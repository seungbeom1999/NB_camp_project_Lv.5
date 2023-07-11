import React from "react";
import { StBtnList, StWrite, StWriteForm } from "./CoWrite";
import CoButton from "../../CoButton";

function CoWriteEntire({ write, access }) {
  return (
    <>
      <StBtnList>
        {write
          ?.filter((board) => board.search === false)
          .map((board) => {
            return (
              <StWriteForm key={board.id}>
                <StWrite>제목: {board.title}</StWrite>
                <StWrite>review: {board.contents}</StWrite>
                <div>
                  <CoButton title="comment" size="sm">
                    댓글 작성
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
                </div>
              </StWriteForm>
            );
          })}
      </StBtnList>
    </>
  );
}

export default CoWriteEntire;
