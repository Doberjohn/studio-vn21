import React from 'react';
import styles from './Loop.module.css';

const Loop = (props) => {
  return (
    <img
      className={styles.loop_current}
      src={props.src}
      onClick={props.onClick}
    />
  );
};

export default Loop;
