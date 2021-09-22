import "./style.scss"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { CAPS } from "configurations"

const Hero = ({ HeroImages, percentage = 75.2, presale }) => {
  const [d, setD] = useState("00")
  const [h, setH] = useState("00")
  const [m, setM] = useState("00")
  const [s, setS] = useState("00")

  useEffect(() => {
    setTimeout(intervalFunc, 1000)
  }, [d, h, m, s])

  const intervalFunc = () => {
    const diff = Math.floor(
      new Date(presale).getTime() / 1000 - Date.now() / 1000
    )
    setD(Math.floor(diff / (3600 * 24)))
    let hs = Math.floor((diff % (3600 * 24)) / 3600)
    setH(hs < 10 ? "0" + hs : hs)
    let ms = Math.floor((diff % 3600) / 60)
    setM(ms < 10 ? "0" + ms : ms)
    let ss = Math.floor(diff % 60)
    setS(ss < 10 ? "0" + ss : ss)
  }
  return (
    <>
      <div className="hero flex flex-column">
        <div className="hero-title flex flex-column">
          <div className="hero-title-first">A Complete Platform Of</div>
          <div className="hero-title-second">DIGITAL CREATURES UNIVERSE</div>
          <div className="hero-title-third">
            Live On The Binance Smart Chain
          </div>
        </div>
        <div className="hero-contract flex flex-column">
          <img src={HeroImages.background} alt="hero background" />
          <div className="hero-contract-address flex flex-column">
            <span>Contract Address:</span>
            <input
              type="text"
              value="0x0be77285f48208c0af60cd91fe61ebfa668b64b7"
              readOnly
            />
            <FontAwesomeIcon icon={faCopy} />
            <div className="hero-contract-buttons flex">
              <Link
                to={{ pathname: "https://www.pancakeswap.finance" }}
                target="_blank"
              >
                BUY ZOMB
              </Link>
              <Link
                to={{ pathname: "https://docs.zombies.network" }}
                target="_blank"
              >
                DOCUMENTATION
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="presale">
        <div className="presale-wrapper flex">
          <div className="presale-timer flex flex-column">
            <span>Pre Sale Starting in</span>
            <div className="presale-timer-ticker flex">
              <div className="presale-timer-ticker-item flex flex-column">
                <span>{d}</span>
                <p>DAYS</p>
              </div>
              <div className="presale-timer-ticker-item flex flex-column">
                <span>{h}</span>
                <p>HOURS</p>
              </div>
              <div className="presale-timer-ticker-item flex flex-column">
                <span>{m}</span>
                <p>MINUTES</p>
              </div>
              <div className="presale-timer-ticker-item flex flex-column">
                <span>{s}</span>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
          <div className="presale-progress flex flex-column">
            <div className="presale-progress-indicator flex">
              <span>{`$${CAPS.softcap}`}</span>
              <span>{`$${CAPS.hardcap}`}</span>
            </div>
            <div className="presale-progress-bar flex">
              <div
                className="presale-progress-bar-line"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="presale-progress-buy flex">
              <span>PreSale 1 BNB = 7000 ZOMB</span>
              <button>BUY TOKEN</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
