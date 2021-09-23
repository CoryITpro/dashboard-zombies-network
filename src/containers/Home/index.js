import { useEffect } from "react"
import HomeComponent from "components/Home"
import Audio from "../../resources/Sounds/sound.mp3"

const Home = () => {
  var played = false
  useEffect(() => {
    window.onload = () => {
      const elems = document.getElementsByTagName("*")
      for (const item of elems) {
        item.addEventListener("click", makeAudioAutoPlay)
      }
    }
  })
  const makeAudioAutoPlay = () => {
    if (played) return
    else played = true
    document.getElementById("zombieAudioPlayer").play()
    document
      .getElementById("zombieAudioPlayer")
      .addEventListener("ended", () => {
        document.getElementById("zombieAudioPlayer").play()
      })
  }

  return (
    <>
      <HomeComponent />
      <audio id="zombieAudioPlayer">
        <source src={Audio}></source>
      </audio>
    </>
  )
}

export default Home
