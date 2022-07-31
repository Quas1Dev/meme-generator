import logo from "../images/logo.png"

export default function Header() {
  return (
    <header id="pg-header">
      <img src={logo} id="site-logo"/>
      <h1 id="site-title"> MemeGenerator </h1>
      <span id="site-details"> React Course - Project 3 </span>
    </header>
  )
}
