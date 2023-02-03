import React from 'react';
import Navbar from './components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import AnimationRoute from './AnimationRoute';


function App() {



  return (
    <div className="App">
   <Router>
    <Navbar />
      <AnimationRoute />
   </Router>
   </div>
  );
}

export default App;
