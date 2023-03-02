import React, { forwardRef, useEffect, useState } from "react";
import styles from './Input.module.scss';


const Input = forwardRef(({disabled, sendMessage}, ref) => {
  const [value, setValue] = useState('')

  const onSend = () => {
    sendMessage(value);
    setValue('');
  }

  return (
    <div className={styles.root}>
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onSend()
          }
        }}
      />
      <button
        disabled={disabled || value === ''}
        onClick={onSend}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
          <title>send-circle-outline</title>
          <path d="M8,7.71L18,12L8,16.29V12.95L15.14,12L8,11.05V7.71M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
        </svg>
      </button>
    </div>
  )
})

export default Input;