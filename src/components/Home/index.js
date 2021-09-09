import "./style.scss"

import Navbar from "components/Navbar"
import Hero from "components/Hero"
import WhyZombies from "components/WhyZombies"
import Features from "components/Features"
import Tokenomics from "components/Tokenomics"
import Roadmap from "components/Roadmap"
import FAQs from "components/FAQs"
import Contact from "components/Contact"
import Footer from "components/Footer"

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <WhyZombies />
    <Features />
    <Tokenomics />
    <Roadmap />
    <FAQs />
    <Contact />
    <Footer />
  </>
)

export default Home
