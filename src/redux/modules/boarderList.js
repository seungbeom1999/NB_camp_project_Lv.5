import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: crypto.randomUUID(),
    title: "데미안",
    contents: "이 책은 별로네요",
    writerId: crypto.randomUUID(),
    isDeleted: false,
  },
];

export const boarderList = createSlice({
  name: "board",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        title: action.payload.title,
        contents: action.payload.contents,
        writerId: action.payload.writerId,
        isDeleted: false,
      });
    },
  },
});

export const { addPost } = boarderList.actions;
export default boarderList.reducer;
