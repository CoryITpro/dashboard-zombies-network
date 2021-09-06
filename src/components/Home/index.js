import "./style.scss"

import Navbar from "components/Navbar"
import Hero from "components/Hero"
import WhyZombies from "components/WhyZombies"
import Features from "components/Features"

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <WhyZombies />
    <Features />
  </>
)

export default Home
