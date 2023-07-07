import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { join } from "../redux/modules/userList";
import useInput from "../hooks/useInput";

function Join() {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [confirmPassword, setConfirmPassword] = useInput();
  const [userName, setUserName] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const joimMember = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 다릅니다 다시 입력해주세요");
      return false;
    }
    dispatch(join({ email, password, userName }));
    alert("회원가입 축하드립니다!!");
    navigate("/");
  };
  return (
    <div>
      <div>
        <h1>회원가입</h1>
      </div>
      <form onSubmit={joimMember}>
        <div>
          <span>아이디 </span> <br />
          <input
            type="text"
            value={email}
            onChange={setEmail}
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div>
          <span>비밀번호 </span> <br />
          <input
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <div>
          <span>확인 비밀번호 </span> <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <div>
          <span>닉네임 </span> <br />
          <input
            type="text"
            value={userName}
            onChange={setUserName}
            placeholder="닉네임을 입력하세요"
          />
        </div>
        <button>회원가입</button>
      </form>
    </div>
  );
}

export default Join;
