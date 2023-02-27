import React from 'react';
import styles from './Home.module.scss';
import Layout from '../components/Layout';
import alex from '../assets/alex-headshot.png';
import { motion } from 'framer-motion';

function Home() {
  return (
    <React.Fragment>
      <Layout>
        <div className={styles.group}>

          <div className={styles.grid}>
            <div className={styles.left}>
              <motion.h3
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                }}
              > 
                Hi, I'm <span className={styles.name}>Alex Shevlin</span>
              </motion.h3>
              <motion.h4 
                className={styles.j_title}
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                }}
                >
                  Full Stack Developer</motion.h4>
            </div>
            <div className={styles.right}>
              <motion.div 
                className={styles.img_wrapper}
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
              >
                <img className={styles.alex} src={alex} alt='alex shevlin' />
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Home