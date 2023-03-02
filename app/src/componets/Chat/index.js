import React, { useRef } from "react";
import styles from './Chat.module.scss';
import Message from "../Message";
import Input from "../Input";
import useChat from "../../hooks/useChat";


const Chat = () => {
  const messageContainerRef = useRef(null);
  const inputRef = useRef(null);

  const {
    messages,
    sendMessage,
    isLoading,
  } = useChat(messageContainerRef, inputRef);

  return (
    <div className={styles.root}>
      <div className={styles.messageContainer} ref={messageContainerRef}>
        {messages.map(message => <Message key={message.id} {...message} />)}
      </div>
      <Input sendMessage={sendMessage} disabled={isLoading} ref={inputRef} />
    </div>
  );
}

export default Chat