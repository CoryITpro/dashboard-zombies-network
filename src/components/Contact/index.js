import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BACKGROUNDS, SubTitles, SocialCommunities } from "constants/index"

const { ContactImages } = BACKGROUNDS

const generateSocials = () =>
  SocialCommunities.map((item, index) => (
    <a key={index} href={item.link} target="_blank" className="flex">
      <FontAwesomeIcon icon={item.icon} />
    </a>
  ))

const Contact = () => (
  <>
    <div className="contact flex">
      <div className="contact-image flex">
        <img src={ContactImages.background} alt="contacts" />
      </div>
      <div className="contact-wrapper flex flex-column">
        <div className="subtitle flex flex-column">
          {SubTitles.Contact.title}
          <span>{SubTitles.Contact.subTitle}</span>
        </div>
        <div className="contact-comment">{SubTitles.Contact.subHeading}</div>
        <div className="flex flex-column">
          <button>LOCAL COMMUNITY</button>
          <p>Contact us: info@zombienetowrk.io</p>
        </div>
      </div>
    </div>
    <div className="socials flex">{generateSocials()}</div>
  </>
)

export default Contact
