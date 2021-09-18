import { useEffect } from "react"
import HomeComponent from "components/Home"

import { useAudio } from "hooks/useAudio"

const Home = () => {
  const playing = useAudio()

  return <HomeComponent />
}

export default Home
