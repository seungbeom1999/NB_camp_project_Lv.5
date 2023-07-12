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
  exmd: css`
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 12px;
    margin: 20px 50px;
  `,
  lg: css`
    font-size: 1rem;
    padding: 6px 12px;
    border-radius: 12px;
    margin: 0 6px;
  `,
  exlg: css`
    font-size: 1rem;
    padding: 6px 12px;
    border-radius: 12px;
    margin: 20px 42px;
  `,
};

const styleBtn = {
  login: css`
    font-size: 1rem;
    font-weight: 600;
    color: #2e2627;
    background-color: #e4c0a8;
    &:hover {
      background-color: #c08457;
    }
  `,
  join: css`
    font-size: 1rem;
    font-weight: 600;
    color: #2e2627;
    background-color: #e4c0a8;
    &:hover {
      background-color: #c08457;
    }
  `,
  logout: css`
    font-size: 1rem;
    font-weight: 600;
    color: #2e2627;
    background-color: #e4c0a8;
    &:hover {
      background-color: #c08457;
    }
  `,
  write: css`
    font-size: 1rem;
    font-weight: 600;
    color: #2e2627;
    background-color: #e0e094;
    &:hover {
      background-color: #c08457;
    }
  `,
  delete: css`
    font-size: 1rem;
    font-weight: 600;
    color: #473b3d;
    background-color: #d4c78c;
    &:hover {
      background-color: #ddcd83;
    }
  `,
  comment: css`
    font-size: 1rem;
    font-weight: 600;
    color: #473b3d;
    background-color: #e0e094;
    &:hover {
      background-color: #d4c78c;
    }
  `,
};

const StyledButton = styled.button`
  ${(props) => props.sizeStyle};
  ${(props) => props.stylefont};
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
`;
export default CoButton;
