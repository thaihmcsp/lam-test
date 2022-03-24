import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Đay la trang chu</h1>
      <Link to='/signup'><button>sign up</button></Link>
      <Link to='/about'><button>about</button></Link>
      <Link to='/test'><button>test</button></Link>
      
    </div>
  )
}

export default Home