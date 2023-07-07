import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/modules/userList";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const valueReset = () => {
    setEmail("");
    setPassword("");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userList);
  console.log(data);

  // 로그인 기능
  const loginSubmit = () => {
    alert(`${email}, ${password}`);
    alert("로그인 되었습니다.");
    dispatch(login({ email: email, password: password }));
    navigate("/");
  };

  // 초기화 기능
  const verificationProcess = (e) => {
    e.preventDefault();
    if (window.confirm("로그인 하시겠습니까?")) {
      return loginSubmit();
    } else {
      alert("다시 입력해주세요");
      valueReset();
    }
  };

  return (
    <form onSubmit={verificationProcess}>
      <div>
        <h1>로그인</h1>
      </div>
      <div>
        <span>이메일</span> <br />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="이메일을 입력해주세요"
        />
      </div>
      <div>
        <span>비밀번호</span> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요"
        />
      </div>
      <div>
        <button>로그인</button>
        {password}
      </div>
    </form>
  );
}

export default Login;
