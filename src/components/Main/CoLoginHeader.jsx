import React from "react";
import { useNavigate } from "react-router-dom";

function CoLoginHeader({ logoutSubmit }) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/Write");
        }}
      >
        글 쓰기
      </button>
      <button
        onClick={() => {
          const confirmed = window.confirm("로그아웃 하시겠습니까?");
          if (confirmed) {
            return logoutSubmit();
          }
        }}
      >
        로그아웃
      </button>
    </div>
  );
}

export default CoLoginHeader;
