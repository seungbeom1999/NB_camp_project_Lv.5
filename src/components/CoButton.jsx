import styled, { css } from "styled-components";
import React from "react";

function CoButton({ size, title, children, onClick }) {
  const sizeStyle = sizes[size];
  const stylefont = styleBtn[title];
  console.log(stylefont);
  return (
    <StyledButton sizeStyle={sizeStyle} stylefont={stylefont} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const sizes = {
  sm: css`
    font-size: 8px;
    padding: 4px 8px;
    border-radius: 12px;
    margin: 0 6px;
  `,
  md: css`
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 12px;
    margin: 0 6px;
  `,
  lg: css`
    font-size: 1rem;
    padding: 6px 12px;
    border-radius: 12px;
    margin: 0 6px;
  `,
};

const styleBtn = {
  login: css`
    font-size: 1rem;
    font-weight: 600;
    color: #2e2627;
    background-color: #e4c0a8;
    &:hover {
      background-color: #964b00;
    }
  `,
  join: css`
    font-size: 1rem;
    font-weight: 600;
    color: #2e2627;
    background-color: #e4c0a8;
    &:hover {
      background-color: #964b00;
    }
  `,
  logout: css`
    font-size: 1rem;
    font-weight: 600;
    color: #2e2627;
    background-color: #e4c0a8;
    &:hover {
      background-color: #964b00;
    }
  `,
  write: css`
    font-size: 1rem;
    font-weight: 600;
    color: #2e2627;
    background-color: #f5f5dc;
    &:hover {
      background-color: #c08457;
    }
  `,
  delete: css`
    font-size: 1rem;
    font-weight: 600;
    color: #473b3d;
    background-color: #8d192b;
    &:hover {
      background-color: #ff5339;
    }
  `,
  comment: css`
    font-size: 1rem;
    font-weight: 600;
    color: #473b3d;
    background-color: #4accff;
    &:hover {
      background-color: #00ffff;
    }
  `,
};

const StyledButton = styled.button`
  ${(props) => props.sizeStyle};
  ${(props) => props.stylefont};
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  pointer-events: auto;
`;
export default CoButton;
