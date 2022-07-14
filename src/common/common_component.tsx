import React from 'react';
import styles from './common_component.module.css';

const CommonComponent = () => {
  return (
    <article className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.title_container}>
          <span className={styles.title}>작가노트</span>
        </div>
        여기에 내용물이 들어감
      </div>
    </article>
  );
};
export default CommonComponent;
