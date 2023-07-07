import { configureStore } from "@reduxjs/toolkit";
import userList from "../modules/userList";
import boarderList from "../modules/boarderList";

const store = configureStore({
  reducer: {
    userList: userList,
    boarderList: boarderList,
  },
});

export default store;
