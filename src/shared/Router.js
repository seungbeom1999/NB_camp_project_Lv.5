import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Write from "../pages/Write";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/" element={<Login />} />
        <Route path="/Write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
