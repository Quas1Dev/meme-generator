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

  const [allMemeImages, setAllMemeImages] = React.useState(Data)

  // Our function to set the new state with the new image and texts for
  // our meme
  function getImage(topText, bottomText){
    // Stores the array of memes in memesArray
    let memesArray = allMemeImages.data.memes
    let randIndex = Math.floor(Math.random() * memesArray.length)
    let object = memesArray[randIndex]

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: object.url
      }
    })
  }

  return (
    <main className="memeGenContainer">
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                onClick={getImage}>
                    Get a new meme image 🖼
                </button>
            </div>
      <Meme img={meme.randomImage}/>
    </main>
  )
}
