import Meme from "./meme.js"
import Data from "./data.js"
import React from "react"

export default function MemeGeneral() {
  /* Set initial state; randomImage is set with a default value
  so React does not complain over an empty img element */
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState([])

  console.log('hello')

  // Handle a side effect*.
  // In this case it is a API fetch. We only make the fetch the first time
  // our component is rendered.
  React.useEffect(()=>{
    console.log('Inside effect')
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  },[])
  
  // Our function to set the new state with the new image and texts for
  // our meme
  function getImage(){
    // Stores the array of memes in memesArray
    let randIndex = Math.floor(Math.random() * allMemeImages.length)
    let object = allMemeImages[randIndex]

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: object.url
      }
    })
  }

  // Modify top and bottom text related state
  function handleChange(e){
    let {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main className="memeGenContainer">
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value = {meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getImage}>
                    Get a new meme image 🖼
                </button>
            </div>
      <Meme {...meme} />
    </main>
  )
}
