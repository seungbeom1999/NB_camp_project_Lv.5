import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";

function Login() {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const Data = async () => {
    const { data } = await axios.get("http://localhost:4000/login");
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    Data();
  }, []);

  // 로그인 기능
  const loginSubmit = async () => {
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

  // 초기화 기능
  const verificationProcess = (e) => {
    e.preventDefault();
    if (window.confirm("로그인 하시겠습니까?")) {
      if (validation()) {
        return loginSubmit();
      }
    } else {
      alert("다시 입력해주세요");
    }
  };

  //유효성 검사
  const validation = async () => {
    let value = true;
    const userId = data.find((user) => user.email === email);
    const userPassword = data.find((user) => user.password === password);
    if (!userId) {
      alert("아이디가 틀렸습니다.");
      value = false;
    }
    if (!userPassword) {
      alert("비밀번호가 틀렸습니다.");
      value = false;
    }
    return value;
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

export default Login;
