import React from "react";
import { StHeader } from "./CoHeader";

function CoNickName({ user, login }) {
  return (
    login &&
    user && (
      <StHeader>
        <span>{user.userName}님 반갑습니다~</span>
      </StHeader>
    )
  );
}

export default CoNickName;
