import "./style.scss"

import { useState } from "react"
import { useHistory } from "react-router-dom"

import { Link } from "react-scroll"
import { CONTACTS } from "configurations"
import { ROUTES, SECTIONS } from "configurations"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import LOGO from "resources/logo.png"

const Navbar = () => {
  const history = useHistory()
  const [collapsed, setCollapsed] = useState(false)

  const onLogoClickHandler = () => {
    history.push(ROUTES.Home)
  }

  const onClickCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <div className="navbar flex">
        <img src={LOGO} alt="logo" onClick={onLogoClickHandler} />
        <div className="navbar-right flex flex-column">
          <div className="navbar-contacts flex">
            <div className="navbar-contacts-phone">{CONTACTS.phone}</div>
            <div className="navbar-contacts-email">{CONTACTS.email}</div>
            <div className="navbar-contacts-address">{CONTACTS.address}</div>
          </div>
          <div className="navbar-buttons flex">
            <Link
              className="navbar-anchor-link"
              activeClass="active"
              to={SECTIONS.WhyZombies}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Why Zombies
            </Link>
            <Link
              className="navbar-anchor-link"
              activeClass="active"
              to={SECTIONS.Features}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Features
            </Link>
            <Link
              className="navbar-anchor-link"
              activeClass="active"
              to={SECTIONS.Tokenomics}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Tokenomics
            </Link>
            <Link
              className="navbar-anchor-link"
              activeClass="active"
              to={SECTIONS.Roadmap}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Roadmap
            </Link>
            <Link
              className="navbar-anchor-link"
              activeClass="active"
              to={SECTIONS.FAQs}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Faq's
            </Link>
            <Link
              className="navbar-anchor-link"
              activeClass="active"
              to={SECTIONS.Community}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Community
            </Link>
            <div className="navbar-buttons-enterapp">ENTER APP</div>
            <div className="navbar-buttons-collapse" onClick={onClickCollapse}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`navbar-collapse-menu flex flex-column ${
          collapsed && "navbar-collapse-menu-collapsed"
        }`}
      >
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={SECTIONS.WhyZombies}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Why Zombies
        </Link>
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={SECTIONS.Features}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Features
        </Link>
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={SECTIONS.Tokenomics}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Tokenomics
        </Link>
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={SECTIONS.Roadmap}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Roadmap
        </Link>
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={SECTIONS.FAQs}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Faq's
        </Link>
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={SECTIONS.Community}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Community
        </Link>
      </div>
    </>
  )
}

export default Navbar
