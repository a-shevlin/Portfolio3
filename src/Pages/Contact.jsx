import React, { useRef } from 'react'
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_API)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <Layout>
      <motion.div className={styles.form_wrapper}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.3,
          duration: 1,
        }}
      >
        <div className={styles.header}>
          <h1>
            Contact
          </h1>
        </div>
        <form onSubmit={sendEmail} ref={form} className={styles.form}>
          <input type='text' name='from_name' placeholder='Name *' required className={styles.WIP} />
          <input type='text' name='from_email' placeholder='Email *' required className={styles.WIP} />
          <input type='text' name='message' placeholder='Message' required className={styles.WIP} />
        </form>
      </motion.div>
    </Layout>
    )
}

export default Contact