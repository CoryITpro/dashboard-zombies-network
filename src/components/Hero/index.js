import "./style.scss"

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { CAPS } from "configurations"

const Hero = ({ HeroImages, percentage = 75.2 }) => (
  <>
    <div className="hero flex flex-column">
      <div className="hero-title flex flex-column">
        <div className="hero-title-first">A Complete Platform Of</div>
        <div className="hero-title-second">DIGITAL CREATURES UNIVERSE</div>
        <div className="hero-title-third">Live On The Binance Smart Chain</div>
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
              <span>00</span>
              <p>DAYS</p>
            </div>
            <div className="presale-timer-ticker-item flex flex-column">
              <span>00</span>
              <p>HOURS</p>
            </div>
            <div className="presale-timer-ticker-item flex flex-column">
              <span>00</span>
              <p>MINUTES</p>
            </div>
            <div className="presale-timer-ticker-item flex flex-column">
              <span>00</span>
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

export default Hero
