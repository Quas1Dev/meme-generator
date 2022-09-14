export default function Meme(props) {
  return (
    <div className="meme_container">
      <img  src={props.randomImage} className="meme_container--meme_img"/>
      <span className="meme_container--top_text"> {props.topText}</span>
      <span className="meme_container--bottom_text"> {props.bottomText}</span>
    </div>
  )
}
