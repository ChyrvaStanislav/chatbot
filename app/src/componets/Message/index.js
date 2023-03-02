import React from "react";
import styles from './Message.module.scss';
import classNames from "classnames";
import Preloader from "../Preloader";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";


const Message = ({ message, time, type }) => {
  if (type === 'preloader') {
    return (
      <div className={classNames(styles.root, styles.preloader)}>
        <Preloader />
      </div>
    )
  }

  return (
    <div className={classNames(styles.root, {
      [styles.user]: type === 'user',
      [styles.bot]: type === 'bot',
    })}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{message}</ReactMarkdown>
      <span>{time}</span>
    </div>
  )
}

export default Message;