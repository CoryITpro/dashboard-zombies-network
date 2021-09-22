import "./style.scss"

const generateTombs = (FeaturesImages, TombContents) =>
  TombContents.map((item, index) => (
    <div key={index} className="features-howtoplay-tomb flex flex-column">
      <img src={FeaturesImages.background} alt="step" />
      <div className="features-howtoplay-tomb-texts flex flex-column">
        <div className="features-howtoplay-tomb-texts-title">{item.title}</div>
        <div className="features-howtoplay-tomb-texts-comment">
          {item.content}
        </div>
      </div>
    </div>
  ))

const generateFeatureItems = (FeatureItems) =>
  FeatureItems.map((item, index) => (
    <div
      key={index}
      className="playtoearn-features-item-wrapper flex flex-column"
    >
      <div className="playtoearn-features-item-wrapper-image flex">
        <img src={item.image} alt="feature" />
      </div>
      <div className="playtoearn-features-item-wrapper-title flex">
        {item.title}
      </div>
      <p className="flex">{item.content}</p>
    </div>
  ))

const Features = ({
  FeaturesImages,
  TombContents,
  SubTitles,
  FeatureItems,
}) => (
  <>
    <div className="features flex flex-column">
      <div className="subtitle flex flex-column">
        {SubTitles.HowToPlay.title}
        <span>{SubTitles.HowToPlay.subTitle}</span>
      </div>
      <div className="features-howtoplay flex">
        {generateTombs(FeaturesImages, TombContents)}
      </div>
    </div>
    <div className="playtoearn flex flex-column">
      <div className="subtitle flex flex-column">
        {SubTitles.Features.title}
        <span>{SubTitles.Features.subTitle}</span>
      </div>
      <div className="playtoearn-comment">{SubTitles.Features.subHeading}</div>
      <div className="playtoearn-features flex">
        {generateFeatureItems(FeatureItems)}
      </div>
    </div>
  </>
)

export default Features
