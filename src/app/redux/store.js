import { configureStore } from "@reduxjs/toolkit";
import showLangMenuReducer from "./slices/showLangMenu";

const store = configureStore({
  reducer: {
    showLangMenu: showLangMenuReducer,
  },
});

export default store;
