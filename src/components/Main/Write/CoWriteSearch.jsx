import React from "react";
import CoButton from "../../CoButton";
import { StBtnDiv, StBtnList, StWrite, StWriteForm } from "./CoWriteEntire";

function CoWriteSearch({ write, access }) {
  return (
    <StBtnList>
      {write
        ?.filter((board) => board.search === true)
        .map((board) => {
          return (
            <StWriteForm key={board.id}>
              <StWrite>제목: {board.title}</StWrite>
              <StWrite>review: {board.contents}</StWrite>
              <StBtnDiv>
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
              </StBtnDiv>
            </StWriteForm>
          );
        })}
    </StBtnList>
  );
}

export default CoWriteSearch;
