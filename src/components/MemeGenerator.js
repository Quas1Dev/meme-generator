import Meme from "./meme.js"

export default function MemeGeneral() {
  return (
    <main id="generator">
      <form className="memeController">
        <fieldset>
          <input placeholder="Top phrase" className="topPhrase"/>
          <input placeholder="Bottom phrase" />
        </fieldset>
        <button> Get a new meme image  </button>
      </form>
      // <Meme />
    </main>
  )
}
