import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import { motion } from 'framer-motion';


function Nav() {
  const [width, setWidth] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {

    (window.innerWidth < 800) ? setWidth(true) : setWidth(false);
    window.onresize = () => {
      (window.innerWidth < 800) ? setWidth(true) : setWidth(false);
    }
  }, []);

  
  return (
    <React.Fragment>
      <nav>
        <div className={styles.browser_flex}>
            <motion.h1
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            >
              <Link to={'/'}>as</Link>
            </motion.h1> 
          { !width ? 
            <ul className={styles.browser_list_items}>
              <motion.li
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
                <Link to={'/about'}>About</Link>
              </motion.li>
              <motion.li
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
                <Link to={'/projects'}>Projects</Link>
              </motion.li>
              <motion.li
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
                <Link to={'/contact'}>Contact</Link>
              </motion.li>
            </ul>
          :
            <div className={styles.phone}>
              <button className={styles.nav_button} onClick={() => setNavOpen(!navOpen)}>
                <motion.svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                  <motion.path 
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1.5,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 1,
                    }}
                    d="M4 18H10" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></motion.path> 
                  <motion.path 
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1.5,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                    }}
                    d="M4 12L16 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></motion.path>
                  <motion.path 
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1.5,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                    }}
                    d="M4 6L20 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></motion.path> </g>
                </motion.svg>
              </button>
              <div className={(navOpen ? styles.nav_open : styles.nav_closed)}>
              <ul className={styles.mobile_list_item}>
              <motion.li
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
                <Link to={'/about'}>About</Link>
              </motion.li>
              <motion.li
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
                <Link to={'/projects'}>Projects</Link>
              </motion.li>
              <motion.li
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
                <Link to={'/contact'}>Contact</Link>
              </motion.li>
            </ul>
              </div>
            </div>
        } 
        </div>
        
      </nav>
    </React.Fragment>
  )
}

export default Nav;