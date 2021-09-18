import { useState, useEffect } from "react"

import SOUND from "resources/Sounds/sound.mp3"

export const useAudio = () => {
  const [audio] = useState(new Audio(SOUND))
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    playing ? audio.play() : audio.play()
  }, [playing])

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(true))
    return () => audio.removeEventListener("ended", () => setPlaying(true))
  }, [])

  return playing
}
