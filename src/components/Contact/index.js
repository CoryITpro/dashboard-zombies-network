import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const generateSocials = (SocialCommunities) =>
  SocialCommunities.map((item, index) => (
    <a key={index} href={item.link} target="_blank" className="flex">
      <FontAwesomeIcon icon={item.icon} />
    </a>
  ))

const Contact = ({ ContactImages, SubTitles, SocialCommunities }) => (
  <>
    <div className="contact flex">
      <div className="contact-image">
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
    <div className="socials flex">{generateSocials(SocialCommunities)}</div>
  </>
)

export default Contact
