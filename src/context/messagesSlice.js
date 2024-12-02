import { createSlice } from "@reduxjs/toolkit"


const initialState={
    messages:[]
}

const webSocketSlice=createSlice({
    name:"websocket",
    initialState,
    reducers:{
        setMessages: (state, action) => {
            state.messages = action.payload;
          },
  
          addMessage: (state, action) => {
            state.messages.push(action.payload);
          },

    }
})

export const { setMessages, addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;