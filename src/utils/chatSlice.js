import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages : [],
    },
    reducers :{
        addmessage : (state,action) =>{
            state.messages.splice(10, 1);
            state.messages.unshift(action.payload);
        }
    }
});

export const {addmessage} = chatSlice.actions;
export default chatSlice.reducer;