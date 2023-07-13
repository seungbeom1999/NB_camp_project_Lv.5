import React from "react";
import serachImg from "../img/search.png";
import { styled } from "styled-components";

function CoSearch({ title, setTitle, write, setWrite }) {
  const writeFilter = (e) => {
    e.preventDefault();
    const writefilteringList = write.filter((item) =>
      item.title.includes(title)
    );
    const updateList = writefilteringList.map((item) => ({
      ...item,
      search: true,
    }));
    setWrite(updateList);
  };

  return (
    <>
      <StSearch>
        검색: &nbsp;
        <input type="text" value={title} onChange={setTitle} /> &nbsp;
        <StButtonContainer onClick={(e) => writeFilter(e)}>
          <StSearchimg src={serachImg} alt="돋보기" />
        </StButtonContainer>
      </StSearch>
    </>
  );
}

export default CoSearch;

const StSearch = styled.form`
  margin-bottom: 30px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 15px 0;
  margin: 0 auto;
`;

export const StButtonContainer = styled.button`
  width: 25px;
  height: 25px;
  padding: 0px;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

export const StSearchimg = styled.img`
  width: 100%;
  height: 100%;
`;
