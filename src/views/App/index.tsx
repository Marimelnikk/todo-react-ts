import React from 'react';

import styles from './index.module.scss';

const App: React.FC = () => { 
  console.log(styles);
  return (
    <article className ={styles.article}>
      <h1 className ={styles.articleTitle}>To Do List</h1>
      <section className ={styles.articleSection}></section>
      <section className ={styles.articleSection}></section>
    </article>
  )
};

export default App;





