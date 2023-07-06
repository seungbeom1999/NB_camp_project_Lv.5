import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    email: "test@naver.com",
    password: "0123",
    userName: "왕만두",
    isLogin: false,
  },
];

export const userList = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userList.actions;
export default userList.reducer;
