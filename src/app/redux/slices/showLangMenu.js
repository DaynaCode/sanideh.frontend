import { createSlice } from "@reduxjs/toolkit";
const initialState = false;

const showLangMenu = createSlice({
  name: "showLangMenu",
  initialState,
  reducers: {
    setShowLangMenu: (state) => {
      state = true;
    },
    unsetShowLangMenu: (state) => {
      state = false;
    },
  },
});

export default showLangMenu.reducer;
export const { setShowLangMenu, unsetShowLangMenu } = showLangMenu.actions;
