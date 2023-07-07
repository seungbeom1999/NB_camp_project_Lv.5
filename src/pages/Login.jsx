import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
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
          placeholder="이메일을 입력해주세요"
        />
      </div>
      <div>
        <button>로그인</button>
      </div>
    </form>
  );
}

export default Login;
