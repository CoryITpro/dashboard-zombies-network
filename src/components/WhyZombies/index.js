import "./style.scss"

const WhyZombies = ({ WhyZombiesImages, SubTitles }) => (
  <section className="whyzombies flex flex-column">
    <div className="whyzombies-gradient-bg"></div>
    <img src={WhyZombiesImages.background} alt="background" />
    <div className="subtitle flex flex-column">
      {SubTitles.WhyZombies.title}
      <span>{SubTitles.WhyZombies.subTitle}</span>
    </div>
    <div className="whyzombies-comment flex">
      <img src={WhyZombiesImages.foreground} alt="hand" />
      <div className="whyzombies-comment-right flex flex-column">
        <span>{SubTitles.WhyZombies.subHeading}</span>
        <p>{SubTitles.WhyZombies.subContent}</p>
      </div>
    </div>
  </section>
)

export default WhyZombies
