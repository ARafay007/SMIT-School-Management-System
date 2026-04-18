
import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentsSlice";

const store = configureStore({
    reducer: {
        studentReducer,
    }
});

export default store;