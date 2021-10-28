import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import reducer from "./reducer";
import logger from "./logger";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger],
  });
}