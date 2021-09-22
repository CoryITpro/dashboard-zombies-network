import "./style.scss"

const Tokenomics = ({ TokenomicsImages, SubTitles }) => (
  <div className="tokenomics flex flex-column">
    <div className="subtitle flex flex-column">
      {SubTitles.Tokenomics.title}
      <span>{SubTitles.Tokenomics.subTitle}</span>
    </div>
    <div className="tokenomics-wrapper flex">
      <img src={TokenomicsImages.background} alt="tokenomics" />
      <div className="tokenomics-wrapper-comments flex flex-column">
        <div className="tokenomics-first flex">
          <div className="tokenomics-item flex flex-column">
            <div className="tokenomics-item-title">Developers</div>
            <div className="tokenomics-item-content">
              Perform daily quests to acquire more.
            </div>
          </div>
          <div className="tokenomics-item flex flex-column">
            <div className="tokenomics-item-title">PLAY TO EARN</div>
            <div className="tokenomics-item-content">
              Perform daily quests to acquire more.
            </div>
          </div>
        </div>
        <div className="tokenomics-middle flex">
          <div className="tokenomics-item flex flex-column">
            <div className="tokenomics-item-title">Farms & Training</div>
            <div className="tokenomics-item-content">
              Perform daily quests to acquire more.
            </div>
          </div>
          <div className="tokenomics-item flex flex-column">
            <div className="tokenomics-item-title">Pre Sale</div>
            <div className="tokenomics-item-content">
              Perform daily quests to acquire more.
            </div>
          </div>
        </div>
        <div className="tokenomics-last flex">
          <div className="tokenomics-item flex flex-column">
            <div className="tokenomics-item-title">Airdrops</div>
            <div className="tokenomics-item-content">
              Perform daily quests to acquire more.
            </div>
          </div>
          <div className="tokenomics-item flex flex-column">
            <div className="tokenomics-item-title">Liquidity</div>
            <div className="tokenomics-item-content">
              Perform daily quests to acquire more.
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src={TokenomicsImages.artwork} alt="artwork" />
  </div>
)

export default Tokenomics
