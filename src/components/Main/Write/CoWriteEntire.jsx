import React from "react";
import { StBtnList, StWrite, StWriteForm } from "./CoWrite";

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
                  <button>댓글 작성</button> &nbsp;
                  <button
                    onClick={() => {
                      access({ writeName: board.writeName, id: board.id });
                    }}
                  >
                    삭제
                  </button>
                </div>
              </StWriteForm>
            );
          })}
      </StBtnList>
    </>
  );
}

export default CoWriteEntire;
