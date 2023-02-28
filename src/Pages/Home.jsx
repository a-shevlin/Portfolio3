import React, { useState, useRef, useEffect } from 'react';
import styles from './Home.module.scss';
import tStyles from '../components/TechStack.module.scss';
import Layout from '../components/Layout';
import alex from '../assets/alex-headshot.png';
import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';

function Home() {
  // scroll width needs to be set manually as this broke after new image scaling.
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {

    // 
    const windowLoad = async() => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const width = window.innerWidth;
      const length = -carousel.current.scrollWidth + carousel.current.offsetWidth;
      const hLength = -carousel.current.scrollHeight + carousel.current.offsetHeight;
      setHeight(hLength);
      setPageWidth(width);
      setWidth(length);
      window.onresize = () => {
        setHeight(hLength);
        setPageWidth(width);
        setWidth(length);
      };  
    }  
    windowLoad();
  }, []);


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
            <div className={tStyles.title} style={{gridColumn: '1 / span 2'}}>
              <motion.h1 style={{textAlign: 'center'}}
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
              >Technologies</motion.h1>
            </div>
            <motion.div className={tStyles.c_wrapper}
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
              <div className={tStyles.c_before_left}>
              </div>
              <div className={tStyles.c_before_right}>
              </div>
              <motion.div ref={carousel} className={tStyles.carousel}
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                }}
                >
                {pageWidth < 600 ? 
                  <motion.div drag={'y'} dragConstraints={{bottom: 0, top: height}} className={tStyles.inner_carousel}>
                    <TechStack />
                  </motion.div>
                :
                  <motion.div drag={'x'} dragConstraints={{right: 0, left: width}} className={tStyles.inner_carousel}>
                    <TechStack />
                  </motion.div>
                }
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Home