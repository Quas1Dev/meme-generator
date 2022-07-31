export default function Meme(props) {
  return (
    <div className="memeContainer">
      <img  src={props.img} />
      <span className="topPhrase"> {props.topPhrase}</span>
      <span className="bottomPhrase"> {props.bottomPhrase}</span>
    </div>
  )
}