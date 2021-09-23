import { useEffect } from "react"
import HomeComponent from "components/Home"
import Audio from "../../resources/Sounds/sound.mp3"

const Home = () => {
  useEffect(() => {
    document.getElementById("zombieAudioPlayer").play()
    document
      .getElementById("zombieAudioPlayer")
      .addEventListener("ended", () => {
        document.getElementById("zombieAudioPlayer").play()
      })
  })

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
