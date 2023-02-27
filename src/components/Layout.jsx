import React from 'react';
import {  motion } from 'framer-motion';
import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <React.Fragment>
      <motion.div 
        className={styles.container}
        initial={{x: -window.innerWidth}}
        animate={{x: 0}}
        exit={{x: -window.innerWidth}}>
          {children}
      </motion.div>
    </React.Fragment>
  )
}

export default Layout