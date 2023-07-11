import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cojoin from "../components/Join/Cojoin";

function Join() {
  const navigate = useNavigate();

  const joinMember = ({ email, password, confirmPassword, userName }) => {
    if (password !== confirmPassword) {
      alert("비밀번호가 다릅니다 다시 입력해주세요");
      return false;
    }

    const loginBox = {
      id: crypto.randomUUID(),
      email,
      password,
      userName,
      isLogin: false,
    };

    axios.post("http://localhost:4000/login", loginBox);
    alert("회원가입 축하드립니다!!");
    navigate("/");
  };

  return <Cojoin joinMember={joinMember} />;
}

export default Join;
