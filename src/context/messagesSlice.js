import { createSlice, PayloadAction } from "@reduxjs/toolkit"


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
          // Action to add a single message to the list
          addMessage: (state, action) => {
            state.messages.push(action.payload);
          },

    }
})

export const { setMessages, addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;