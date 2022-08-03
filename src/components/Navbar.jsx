import React from 'react'
import trollface from '../images/Troll_Face.png'
function Navbar() {
  return (
    <div className="navbar-container">
      <img src={trollface} alt="troll-face" />
      <h2>
        Meme generator
      </h2>
    </div>
  )
}

export default Navbar