import React from 'react';

// Local Dependencies
import { QueryCreator } from 'features/QueryCreator';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <QueryCreator />
    </div>
  );
};

export default App;
