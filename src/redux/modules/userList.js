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
  reducers: {
    join: (state, action) => {
      const newUser = {
        id: crypto.randomUUID(),
        email: action.palyoad.email,
        password: action.palyoad.password,
        userName: action.palyoad.userName,
        isLogin: false,
      };
      state.push(newUser);
    },
    login: (state, action) => {
      return state.map((item) => {
        if (
          item.password === action.palyoad.password &&
          item.email === action.payload.email
        ) {
          return { ...item, isLogin: !item.isLogin };
        } else {
          return item;
        }
      });
    },
  },
});

export const { join } = userList.actions;
export default userList.reducer;
