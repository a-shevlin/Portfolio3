import React from 'react';
import { motion } from 'framer-motion';
import classes from './Layout.module.scss';

function Layout({ children }) {
  return (
    <motion.div 
      className={classes.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        {children}
    </motion.div>
  )
}

export default Layout