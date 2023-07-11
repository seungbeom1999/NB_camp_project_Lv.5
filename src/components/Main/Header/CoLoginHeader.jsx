import React from "react";
import { useNavigate } from "react-router-dom";
import CoButton from "../../CoButton";

function CoLoginHeader({ logoutSubmit }) {
  const navigate = useNavigate();

  return (
    <div>
      <CoButton
        title="write"
        size="md"
        onClick={() => {
          navigate("/Write");
        }}
      >
        글 쓰기
      </CoButton>
      <CoButton
        title="logout"
        size="md"
        onClick={() => {
          const confirmed = window.confirm("로그아웃 하시겠습니까?");
          if (confirmed) {
            return logoutSubmit();
          }
        }}
      >
        로그아웃
      </CoButton>
    </div>
  );
}

export default CoLoginHeader;
