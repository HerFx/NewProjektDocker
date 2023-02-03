import React from 'react'
import Random from './components/pages/Random';
import AllFilm from './components/pages/AllFilm';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

export default function AnimationRoute() {

  const location = useLocation();


  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path='/random' element={<Random/>}/>
      <Route path='/' element={<AllFilm/>}/>
    </Routes>
    </AnimatePresence>
  )
}

