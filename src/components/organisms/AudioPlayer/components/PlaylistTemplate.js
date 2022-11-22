import React from 'react';
import styles from './PlaylistTemplate.module.css';

const PlaylistTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PlaylistTemplate;
