import "./style.scss"

import BACKGROUND from "resources/whyzombies-bg.png"
import HAND from "resources/whyzombies-hand.png"

import { SECTIONS } from "configurations"

const WhyZombies = () => (
  <section id={SECTIONS.WhyZombies} className="whyzombies flex flex-column">
    <div className="whyzombies-gradient-bg"></div>
    <img src={BACKGROUND} alt="background" />
    <div className="whyzombies-title flex flex-column">
      WHAT IS
      <span>Zombie Network</span>
    </div>
    <div className="whyzombies-comment flex">
      <img src={HAND} alt="hand" />
      <div className="whyzombies-comment-right flex flex-column">
        <span>
          Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed
          pretium sem libero, vel pellentesque purus ultrices ut..
        </span>
        <p>
          Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed
          pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id
          massa pulvinar euismod cursus non justo. Sed sagittis et urna non
          efficitur. Nulla nec lacus tincidunt, rutrum arcu in, euismod diam.
          Donec neque tellus, congue sed velit sed, scelerisque scelerisque
          urna. Praesent mi sem, tincidunt eget facilisis in, pharetra et
          sapien.
        </p>
      </div>
    </div>
  </section>
)

export default WhyZombies
