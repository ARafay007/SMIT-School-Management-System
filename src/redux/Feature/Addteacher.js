import { createSlice } from "@reduxjs/toolkit";

const initialState = []; 
const Addteacher = createSlice({
    name:'Addteacher',
    initialState,
    reducers:{
        addteacher:(state,action)=>{
            state.push(action.payload);

        }
    }
})
export const {addteacher} = Addteacher.actions
export default Addteacher.reducer;