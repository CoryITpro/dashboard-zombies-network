import "./style.scss"

import { useHistory } from "react-router-dom"

import { HashLink as Link } from "react-router-hash-link"
import { CONTACTS } from "configurations"
import LOGO from "resources/logo.png"
import { ROUTES, SECTIONS } from "configurations"

const Navbar = () => {
  const history = useHistory()

  const onLogoClickHandler = () => {
    history.push(ROUTES.Home)
  }

  return (
    <div className="navbar flex">
      <img src={LOGO} alt="logo" onClick={onLogoClickHandler} />
      <div className="navbar-right flex flex-column">
        <div className="navbar-contacts flex">
          <div className="navbar-contacts-phone">{CONTACTS.phone}</div>
          <div className="navbar-contacts-email">{CONTACTS.email}</div>
          <div className="navbar-contacts-address">{CONTACTS.address}</div>
        </div>
        <div className="navbar-buttons flex">
          <Link to={`${ROUTES.Home}#${SECTIONS.WhyZombies}`}>Why Zombies</Link>
          <Link to={`${ROUTES.Home}#${SECTIONS.Features}`}>Features</Link>
          <Link to={`${ROUTES.Home}#${SECTIONS.Tokenomics}`}>Tokenomics</Link>
          <Link to={`${ROUTES.Home}#${SECTIONS.Roadmap}`}>Roadmap</Link>
          <Link to={`${ROUTES.Home}#${SECTIONS.FAQs}`}>Faq's</Link>
          <Link to={`${ROUTES.Home}#${SECTIONS.Community}`}>Community</Link>
          <div className="navbar-buttons-enterapp">ENTER APP</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
