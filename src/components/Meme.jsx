import React, { useState, useEffect } from 'react'

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })

  const [allMemes, setAllMemes] = useState([])
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    let url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
      topText: "",
      bottomText: "",
    }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  return (

    <div className='form'>
      <div className="input-container">
        <input
          className='first-input'
          type="text"
          placeholder='Top text for your meme'
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          className='second-input'
          type="text"
          placeholder='Bottom text for your meme'
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={getMemeImage}
        className='form-btn'
      >Get a new meme image 🖼️</button>
      <div className="meme">
        {meme.randomImage && <img className='meme--img' src={meme.randomImage} alt="meme-img" />}
        {meme.randomImage && <h2 className='meme--text top'>{meme.topText}</h2>}
        {meme.randomImage && <h2 className='meme--text bottom'>{meme.bottomText} </h2>}
      </div>
    </div>
  )
}

export default Meme