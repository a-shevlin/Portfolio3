import React from 'react';
import { motion } from 'framer-motion';
import classes from './Layout.module.scss';
import Nav from './Nav';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Nav />
      <motion.div 
        className={classes.container}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
          {children}
      </motion.div>
    </React.Fragment>
  )
}

export default Layout