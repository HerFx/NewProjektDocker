import React from 'react'
import Card from '../Card'
import { useState} from 'react';
import ReactConfetti from 'react-confetti';
import axios from 'axios';

export default function Random() {

    
  const [confetti, setConfetti] = useState(false);

  
  const apiUrl = 'http://localhost:8080'

  const [movie, setMovie] = useState('')
  
  const getMovie = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(`${apiUrl}/movies/random`)
    setMovie(data)
  }

  
  return (
    <div className='random'>
      <h1 className='moviesTitle'><i class="fa-solid fa-circle-question"></i>Random Movie</h1>
      <form onSubmit={getMovie}>
        <button type="submit" onClick={() => setConfetti(true)}>Random</button>
        {confetti && <ReactConfetti width={window.innerWidth} height={window.innerHeight}/>}
      </form>
     {movie && <Card title={movie.title} where={movie.whereToWatch} type={movie.movieType} id={movie.id}/>}
    </div>
  )
}