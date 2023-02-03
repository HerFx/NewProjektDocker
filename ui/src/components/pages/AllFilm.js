import React from 'react'
import AllFilmSection from '../AllFilm/AllFilmSection'
import {motion} from 'framer-motion';

export default function AllFilm() {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: {duration: 0.4}}}
    >
        <AllFilmSection/>
    </motion.div>
  )
}
