import React from 'react';
import styles from './index.module.css';

const ZeroOneRays = () => {
  return (
    <div className={styles['container']}>
      <svg className={styles['raysSvg']} viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="3" />
      </svg>
    </div>
  );
};

export default ZeroOneRays;
