import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { setMessages, addMessage } from './redux/messagesSlice';

const socket = io('ws://localhost:3000');
function App() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);


  useEffect(() => {

    socket.on('action1', (message) => {
      dispatch(addMessage(message));
    });

    socket.on('action2', (message) => {
      dispatch(addMessage(message));
    });

    socket.on('action3', (message) => {
      dispatch(addMessage(message));
    });

    socket.on('acton4', (message) => {
      dispatch(addMessage(message));
    });

    socket.on('action5', (message) => {
      dispatch(addMessage(message));
    });

   
  }, [dispatch]);

  return (
    <div>
      {messages.map(message => 
        <div>{message}</div>
      )}
    </div>
  )
}

export default App
