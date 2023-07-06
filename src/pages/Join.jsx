import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { join } from "../redux/modules/userList";

function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>회원가입</h1>
      </div>
      <div>
        <span>아이디 </span> <br />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="이메일을 입력하세요"
        />
      </div>
      <div>
        <span>비밀번호 </span> <br />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div>
        <span>확인 비밀번호 </span> <br />
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div>
        <span>닉네임 </span> <br />
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="닉네임을 입력하세요"
        />
      </div>
      <button
        onClick={() => {
          if (password !== confirmPassword) {
            alert("비밀번호가 다릅니다 다시 입력해주세요");
            return false;
          }
          dispatch(join({ email, password, userName }));
          alert("회원가입 축하드립니다!!");
          navigate("/");
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default Join;
