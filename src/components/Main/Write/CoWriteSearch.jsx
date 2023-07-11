import React from "react";
import { StBtnList, StWrite, StWriteForm } from "../../../pages/Main";

function CoWriteSearch({ filterWrite, access }) {
  return (
    <StBtnList>
      {filterWrite
        ?.filter((board) => board.search === true)
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
  );
}

export default CoWriteSearch;
