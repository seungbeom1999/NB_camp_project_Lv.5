import React, { useEffect, useState } from "react";
import axios from "axios";
import CoLogin from "../components/Login/CoLogin";

function Login() {
  const [data, setData] = useState([]);

  const Data = async () => {
    const { data } = await axios.get(process.env.REACT_APP_SERVER_LOGIN);
    setData(data);
  };

  useEffect(() => {
    Data();
  }, []);

  return <CoLogin data={data} />;
}

export default Login;
