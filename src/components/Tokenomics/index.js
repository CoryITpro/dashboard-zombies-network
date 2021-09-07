import "./style.scss"

import { BACKGROUNDS, SubTitles } from "constants/index.js"

const { TokenomicsImages } = BACKGROUNDS

const Tokenomics = () => (
  <div className="tokenomics flex flex-column">
    <div className="subtitle flex flex-column">
      {SubTitles.Tokenomics.title}
      <span>{SubTitles.Tokenomics.subTitle}</span>
    </div>
    <div className="tokenomics-wrapper flex">
      <img src={TokenomicsImages.background} alt="tokenomics" />
    </div>
    <img src={TokenomicsImages.artwork} alt="artwork" />
  </div>
)

export default Tokenomics
