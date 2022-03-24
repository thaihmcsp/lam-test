import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <h1>About
      <Link to='/'> <button>Home</button></Link>
    </h1>
  )
}

export default About