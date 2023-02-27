import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import styles from './TechStack.module.scss';

function Tech(props) {
  return (
    <React.Fragment>
      <motion.div style={{display: 'block', textAlign: 'center'}} className={styles.item}>
        <img src={props.img} alt={props.img} />
      </motion.div>
    </React.Fragment>
  )
}

export default Tech;

Tech.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
}