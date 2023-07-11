import React from "react";
import useInput from "../../hooks/useInput";
import CoButton from "../CoButton";

function Cojoin({ joinMember }) {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [confirmPassword, setConfirmPassword] = useInput();
  const [userName, setUserName] = useInput();

  const joinhandler = (e) => {
    e.preventDefault();
    joinMember({ email, password, confirmPassword, userName });
  };

  return (
    <div>
      <div>
        <h1>회원가입</h1>
      </div>
      <form onSubmit={joinhandler}>
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
        <CoButton title="join" size="lg">
          회원가입
        </CoButton>
      </form>
    </div>
  );
}

export default Cojoin;
