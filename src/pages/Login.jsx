import React, { useEffect, useState } from "react";
import axios from "axios";
import CoLogin from "../components/Login/CoLogin";

function Login() {
  const [data, setData] = useState([]);

  const Data = async () => {
    const { data } = await axios.get("http://localhost:4000/login");
    setData(data);
  };

  useEffect(() => {
    Data();
  }, []);

  return <CoLogin data={data} />;
}

export default Login;
