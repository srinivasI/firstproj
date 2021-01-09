import React from 'react';
import styles from './Testmod.module.css'; 

class Mycssmod extends React.Component {
  render() {
    return <h1 className={styles.heading1}>Hello Css module content</h1>;
  }
}

export default Mycssmod;