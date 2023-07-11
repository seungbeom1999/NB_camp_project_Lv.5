import React from "react";
import { useNavigate } from "react-router-dom";

function CoMainHeader() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/Login");
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          navigate("/join");
        }}
      >
        회원 가입
      </button>
    </div>
  );
}

export default CoMainHeader;
