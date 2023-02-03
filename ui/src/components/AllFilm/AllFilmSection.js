import React from 'react'
import Card from '../Card'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';


export default function AllFilmSection() {

  const apiUrl = 'http://localhost:8080'

  const [show, setShow] = useState(false)
  const [movie, setMovie] = useState([])
  const [input, setInput] = useState({
    title: '',
    whereToWatch: '',
    movieType: ''
  })

  


  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get(`${apiUrl}/movies`)
      setMovie(data)
    }
    getMovie()
  }, [])
  const addTitle = (e) => {
    setInput({
      ...input,
      title: e.target.value
    })
  }
  const addWhere = (e) => {
    setInput({
      ...input,
      whereToWatch: e.target.value
    })
  }
  const addType = (e) => {
    setInput({
      ...input,
      movieType: e.target.value
    })
  }
  const addMovie = async (e) => {
    e.preventDefault()
    const { data } = await axios.post(`${apiUrl}/movies`, input)
    setMovie([...movie, data])
    setInput({
      title: '',
      whereToWatch: '',
      movieType: ''
    })
    setShow(false)
  }
  
  const deleteMovie = async (id) => {
    await axios.delete(`${apiUrl}/movies/${id}`)
    const newMovie = movie.filter((el) => el._id !== id)
    setMovie(newMovie)
  }


  const showForm = () => {
    setShow(!show)
  }

  

  return (
    <div className='movies'>
    <h1 className='moviesTitle'><i className="fa-solid fa-film"></i>Wszystkie Filmy Do Obejrzenia</h1>
    <button  className='showBtn' onClick={showForm}>{show?<i class="fa-solid fa-minus"></i>:<i className="fa-solid fa-plus"></i>}Dodaj Film</button>
    <div className='add'>
       {show && <motion.form className='addform'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        onSubmit={addMovie}
       >
            <input type="text" id='title' placeholder="Title"  onChange={addTitle} value={input.title}/>
            <input type="text" id='whereToWatch' placeholder="Where" onChange={addWhere} value={input.whereToWatch}/>
            <input type="text" id='movieType' placeholder="Type" onChange={addType} value={input.movieType}/>
            <button>Add</button>
        </motion.form>}
    </div>
    <div className='movieBox'>
      {movie.map((el) => {
        return <Card title={el.title} where={el.whereToWatch} type={el.movieType} id={el._id} onClick={deleteMovie}/>
      })}
    </div>
    </div>
  )
}
