import "./style.scss"

import TOMB from "resources/step-bg.svg"

const Features = () => (
  <>
    <div className="features flex flex-column">
      <div className="features-title flex flex-column">
        LEARN MORE
        <span>How To Play</span>
      </div>
      <div className="features-howtoplay flex">
        <div className="features-howtoplay-tomb flex flex-column">
          <img src={TOMB} alt="step" />
          <div className="features-howtoplay-tomb-texts flex flex-column">
            <div className="features-howtoplay-tomb-texts-title">Owned</div>
            <div className="features-howtoplay-tomb-texts-comment">
              To participate in Zombies, you must have at least one ZOMB or
              items. You can own in a variety of methods, including purchasing
              on the NFT marketplace, purchasing eggs, or purchasing from other
              players.
            </div>
          </div>
        </div>
        <div className="features-howtoplay-tomb flex flex-column">
          <img src={TOMB} alt="step" />
          <div className="features-howtoplay-tomb-texts flex flex-column">
            <div className="features-howtoplay-tomb-texts-title">
              Play-To-Earn
            </div>
            <div className="features-howtoplay-tomb-texts-comment">
              Perform daily quests to acquire more ZOMB tokens and get profit
              while assisting Zombies in escaping the Yaki empire's invasion.
            </div>
          </div>
        </div>
        <div className="features-howtoplay-tomb flex flex-column">
          <img src={TOMB} alt="step" />
          <div className="features-howtoplay-tomb-texts flex flex-column">
            <div className="features-howtoplay-tomb-texts-title">Repeat</div>
            <div className="features-howtoplay-tomb-texts-comment">
              Use ZOMB tokens to acquire more ZOMBs with higher level to enhance
              your profits with Zombies
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="playtoearn flex flex-column">
      <div className="playtoearn-title flex flex-column">
        PLAY TO EARN
        <span>
          The First Ecosystem To Combine The Greatest Aspects Of Gaming And
          Digital Collectibles
        </span>
      </div>
      <div className="playtoearn-comment">
        Zombies is inspired by Pokemon Story, our mission is to build a
        comprehensive platform of digital monsters that will enable millions of
        individuals to participate in the NFT and blockchain-based gaming world
        in a simple, creative, and enjoyable way.
      </div>
    </div>
  </>
)

export default Features
