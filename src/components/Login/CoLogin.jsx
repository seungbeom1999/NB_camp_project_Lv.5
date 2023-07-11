import React from "react";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CoLogin({ data }) {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const navigate = useNavigate();

  const loginProcess = (e) => {
    e.preventDefault();
    verificationProcess({ email, password });
  };

  // 확인 절차 기능
  const verificationProcess = async ({ email, password }) => {
    if (window.confirm("로그인 하시겠습니까?")) {
      const value = await validation({ email, password });
      if (value) {
        return loginSubmit({ email, password });
      }
    } else {
      alert("다시 입력해주세요");
    }
  };

  //유효성 검사
  const validation = async ({ email, password }) => {
    let value = true;
    const userId = data.find((user) => user.email === email);
    const userPassword = data.find((user) => user.password === password);
    if (!userId) {
      alert("아이디가 틀렸습니다.");
      return false;
    }
    if (!userPassword) {
      alert("비밀번호가 틀렸습니다.");
      return false;
    }
    return value;
  };

  // 로그인 기능
  const loginSubmit = async ({ email, password }) => {
    alert("로그인 되었습니다.");
    const user = data.find(
      (user) => user.email === email && user.password === password
    );
    await axios.put(`http://localhost:4000/login/${user.id}`, {
      ...user,
      isLogin: true,
    });
    navigate("/");
  };

  return (
    <form onSubmit={loginProcess}>
      <div>
        <h1>로그인</h1>
      </div>
      <div>
        <span>이메일</span> <br />
        <input
          type="text"
          value={email}
          onChange={setEmail}
          placeholder="이메일을 입력해주세요"
        />
      </div>
      <div>
        <span>비밀번호</span> <br />
        <input
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="비밀번호를 입력해주세요"
        />
      </div>
      <div>
        <button>로그인</button>
      </div>
    </form>
  );
}

export default CoLogin;
