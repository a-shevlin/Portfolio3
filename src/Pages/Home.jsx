import React from 'react';
import classes from './Home.module.scss';
import Layout from '../components/Layout';
import alex from '../assets/alex-headshot.png';
import { motion } from 'framer-motion';

function Home() {
  return (
    <React.Fragment>
      <Layout>
        <div className={classes.group}>

          <div className={classes.grid}>
            <div className={classes.left}>
              <h3> 
                Hi, I'm <span className={classes.name}>Alex Shevlin</span>
              </h3>
              <h4 className={classes.j_title}>Full Stack Developer</h4>
            </div>
            <div className={classes.right}>
              <motion.div 
                className={classes.img_wrapper}
                
              >
                <img className={classes.alex} src={alex} alt='alex shevlin' />
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Home