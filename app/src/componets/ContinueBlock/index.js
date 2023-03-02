import React from "react";
import styles from './ContinueBlock.module.scss';

const ContinueBlock = () => {
  console.log('CB')

  return (
    <div>
      <p>Do you want to continue?</p>
      <button>Yes</button>
      <button>No</button>
    </div>
  )
}

export default ContinueBlock;