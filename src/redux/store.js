import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './Feature/AddstudentSlice'
import addteacherReducer from './Feature/Addteacher'
const store = configureStore({
    reducer: {
        studentReducer,
        addteacherReducer,
    }

})
export default store;