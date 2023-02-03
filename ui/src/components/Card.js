import React from 'react'

export default function Card(props) {
  
  const star = [];
  for (let i = 0; i < 3; i++) {
    star.push(<i class="fa-solid fa-star"></i>)
  }

  return (
    <div className='card' onClick={() => {
      props.onClick(props.id)
    }}>
      <div className='stars'>{star}</div>
      <h1>{props.title}</h1>
      <p>{props.where}</p>
      <p>{props.type}</p>
    </div>
  )
}
