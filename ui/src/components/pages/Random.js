import React from 'react'
import RandomSection from '../Random/RandomSection'
import {motion} from 'framer-motion';

export default function Random() {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: {duration: 0.4}}}
    >
        <RandomSection/>
    </motion.div>
  )
}

