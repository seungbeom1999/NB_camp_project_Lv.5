import React from "react";
import { useNavigate } from "react-router-dom";
import CoButton from "../../CoButton";

function CoMainHeader() {
  const navigate = useNavigate();

  return (
    <div>
      <CoButton
        title="login"
        size="md"
        onClick={() => {
          navigate("/Login");
        }}
      >
        로그인
      </CoButton>
      <CoButton
        title="join"
        size="md"
        onClick={() => {
          navigate("/join");
        }}
      >
        회원 가입
      </CoButton>
    </div>
  );
}

export default CoMainHeader;
