import { useState } from "react";
import { produce } from 'immer';
import axios from "axios";
import uuid from "react-uuid";

const useChat = (messageContainerRef, inputRef) => {
  const initialMessage = {
    id: uuid(),
    message: "Hello, how can I help you?",
    type: 'bot'
  };

  const [messages, setMessages] = useState([initialMessage])
  const [isLoading, setIsLoading] = useState(false)

  const scrollToTheEnd = () => {
    setTimeout(() => {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        left: 0,
        behavior: 'smooth',
      })
    }, 50);
  }

  const getAnswer = async (message) => {
    const { data } = await axios.post('http://localhost:5000', { message })

    setMessages(state => produce(state, (s) => {
      s.pop();
      s.push({ message: data.message, type: 'bot', id: data.id });
    }))
    setIsLoading(false);
    inputRef.current.focus();
    scrollToTheEnd();
  }

  const sendMessage = (message) => {
    setMessages(state => produce(state, (s) => {
      s.push({ message, type: 'user', id: uuid(), });
      s.push({ type: 'preloader', id: uuid(), });
    }))
    scrollToTheEnd();
    setIsLoading(true)
    getAnswer(message)
  }


  return {
    messages,
    sendMessage,
    isLoading,
  }
};

export default useChat;