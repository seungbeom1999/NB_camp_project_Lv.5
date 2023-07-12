import React from "react";
import CoButton from "../../CoButton";
import { styled } from "styled-components";

function CoWriteEntire({ write, access }) {
  return (
    <StBtnList>
      {write
        ?.filter((board) => board.search === false)
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
