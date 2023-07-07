import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: crypto.randomUUID(),
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
        email: action.payload.email,
        password: action.payload.password,
        userName: action.payload.userName,
        isLogin: false,
      };
      state.push(newUser);
    },
    login: (state, action) => {
      return state.map((item) => {
        if (
          item.email === action.payload.email &&
          item.password === action.payload.password
        ) {
          return { ...item, isLogin: !item.isLogin };
        } else {
          return item;
        }
      });
    },
    logout: (state, action) => {
      return state.map((user) => {
        return { ...user, isLogin: false };
      });
    },
  },
});

export const { join, login, logout } = userList.actions;
export default userList.reducer;
